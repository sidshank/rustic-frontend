import React, { useState, useEffect } from 'react';
import "./Home.css";
import Gallery from 'react-grid-gallery';
import axios from 'axios';
import { Button, Toast } from "react-bootstrap";

const constructTagsFromTagString = tagString => {
    if (tagString.trim().length === 0) {
        return [];
    }
    return tagString.split("-").map(tag => {
        return {
            value: tag,
            title: tag,
        }
    });
}

const convertImageToGalleryImage = imageDetails => {
    return {
      src: imageDetails.presigned_url,
      thumbnail: imageDetails.presigned_url,
      thumbnailWidth: 300,
      thumbnailHeight: 200,
      caption: "",
      tags: constructTagsFromTagString(imageDetails.tags),
      eTag: imageDetails.e_tag,
    }
  }
  
const getImagesList = imageDetails => {
    let imageList = [];
    imageDetails.forEach((imageDetail) => {
        imageList.push(convertImageToGalleryImage(imageDetail))
    });
    return imageList;
};

const onSelectImage = (index, image) => {
    console.dir(image);
}

export default function Home({ filterParam }) {
  const [bucketContents, setBucketContents] = useState({ data: [] });
  const [show, setShow] = useState(false);
  const [eTag, setETag] = useState("");

  const onCaptionButtonClick = (eTagString) => {
    setETag(eTagString);
    setShow(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'http://localhost:8000/contents', {
            params: {
                filter: filterParam
            }
        }
      );
      setBucketContents(result.data);
    };
    fetchData();
  }, [filterParam]);
  const imageList = getImagesList(bucketContents.data);
  const images = imageList.map(img => {
      img.customOverlay = (
        <div style={captionStyle}>
            <Button variant="primary" type="submit" onClick={() => onCaptionButtonClick(img.eTag)}>
                Copy e-tag
            </Button>
        </div>
      );
      return img;
  })
  return (
    <div className="Home">
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide className="etagtoast">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Copied e-tag!</strong>
          </Toast.Header>
          <Toast.Body>Copied e-tag <strong>{eTag}</strong> to clipboard!</Toast.Body>
        </Toast>
        <Gallery 
            images={images}
            enableImageSelection={false}
            onSelectImage={onSelectImage}
        />
    </div>
  );
}

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

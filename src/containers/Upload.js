import React, { useState } from "react";
import "./Upload.css";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
// Sourced from: https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
export default function Upload() {
    const [chosenFile, setChosenFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [tags, setTags] = useState([]);

    const handleTagChange = tags => {
        console.log("HandleTagChange was called.")
        setTags(tags);
        console.log(tags);
    }

    const onFileChoose = event => {
        const file = event.target.files[0];
        console.dir(file);
        setChosenFile(file);
        setFileName(file.name);
        console.log(file.name);
    };

    const onUpload = () => {
        const tagString = tags.join("-");
        const data = new FormData();
        data.append('file', chosenFile);
        data.append('tags', tagString);
        data.append('fileName', fileName);
        axios.post("http://localhost:8000/upload", data)
        .then(res => { // then print response status
            console.dir(res)
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formFileUpload" className="form-group files">
                    <Form.Label>Upload your file</Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={onFileChoose}/>
                </Form.Group>
                <TagsInput value={tags} onChange={handleTagChange} />
                <br />
                <Button variant="primary" type="submit" onClick={onUpload}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}
import React, { useState } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";

function App() {

  const [filterText, setFilterText] = useState("");
  const [filterParam, setFilterParam] = useState("");
  
  const onFilterTextChange = event => {
    setFilterText(event.target.value);
  };

  const onSearchButtonClick = () => {
    console.log("Going to search for:" + filterText);
    setFilterParam(filterText);
  };

  return (
    <div className="App container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          RUSTic
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>View Images</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/upload">
              <Nav.Link>Upload Image</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={onFilterTextChange}/>
            <Button variant="outline-success" onClick={onSearchButtonClick}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Routes filter={filterParam}/>
    </div>
  );

}

export default App;

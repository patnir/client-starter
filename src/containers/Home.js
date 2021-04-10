import React, { useState } from "react";
import "./Home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Home() {
  const [fileContents, setFileContents] = useState("");

  function getFileContents(file) {
    console.log("file contents");
    console.log(file);
    setFileContents("new front end contents");
  }

  function uploadFile() {
    if (fileContents === "") {
      alert("Please select a file");
    } else {
      const url =
        "https://5t2a58gtd1.execute-api.us-east-1.amazonaws.com/dev/uploader";
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: fileContents,
      });
    }
  }

  return (
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
        <Form>
          <Form.File.Input onChange={(file) => getFileContents(file)} />
        </Form>
        <Button title={"Upload file"} onClick={uploadFile}>
          Upload File
        </Button>
      </div>
    </div>
  );
}

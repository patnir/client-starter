import React, { useState } from "react";
import "./Home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Home() {
  const [fileContents, setFileContents] = useState(undefined);

  function getFileContents(event) {
    console.log("file contents");

    var file = event.target.files[0];
    console.log(file);

    setFileContents(file);
  }

  async function uploadFile() {
    if (fileContents === undefined) {
      alert("Please select a file");
    } else {
      let formData = new FormData();
      formData.append("customFile", fileContents);
      const url =
        "https://5t2a58gtd1.execute-api.us-east-1.amazonaws.com/dev/uploader";
      await fetch(url, {
        method: "POST",
        body: formData,
      });

      console.log("uploaded");
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

import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("Nothing uploaded");

  // Function to handle the file after it is uploaded
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus(e.target.files[0].name);
    }
    return;
  };

  // Function to show a message if there is not a file uploaded
  const handleUpload = async () => {
    if (!file) {
      setStatus("Select a file");
      return;
    }

    // Constructing a class with key/values
    const formData = new FormData();
    formData.append("file", file);

    // Calling the endpoint to make the transformation
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData
      );
      console.log(response.data);
      setStatus("File uploaded successfully");
    } catch (e) {
      setStatus("Error uploading");
      throw new Error(
        "An error has ocurred trying to connect to the server: ",
        e
      );
    }
  };
  return (
    <div className="container d-flex justify-content-center mt-100">
      <div>
        <div>
          <div className="file-drop-area file-drop-area-hover">
            <h1 style={{ marginRight: "20px" }}>Upload of Excel Files</h1>
            <span className="choose-file-button">Choose files</span>
            <span className="file-message">or drag and drop files here</span>
            <input
              className="file-input"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <span></span>
        <div style={{ textAlign: "center" }}>
          <button className="file-button" onClick={handleUpload}>
            Upload
          </button>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

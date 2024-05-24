import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  // Function to handle the file after it is uploaded
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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

    try {
      const fetching = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData
      );
      setStatus(fetching.data);
    } catch (e) {
      setStatus("Error uploading");
      throw new Error(
        "An error has ocurred trying to connect to the server: ",
        e
      );
    }
  };
  return (
    <div className="App">
      <h1>Upload de Arquivo Excel</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
}

export default App;

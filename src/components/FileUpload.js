import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const auth_id = "bruh12345"
  const [file, setFile] = useState(null);
  const [pass, setPass] = useState("");

  const handleTextChange = (event) => {
    let selectedText = event.target.value;
    setPass(selectedText);
  }

  // Function to handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Function to handle file upload and send PUT request
  const handleUpload = async () => {
    if (file && pass) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('https://twt87y3iyj.execute-api.us-east-1.amazonaws.com/staging', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          params: {
            authId: auth_id,
          },
        });

        // Handle the response from the API here
        console.log('Upload successful:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <>
        <span>Password</span>
        <input
          type="text"
          name="pass"
          value={pass}
          onChange={handleTextChange}
        />
      </>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;

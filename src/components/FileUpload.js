import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [pass, setPass] = useState("");

  const handleTextChange = (event) => {
    let selectedText = event.target.value;
    setPass(selectedText);
  }

  // Function to handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Function to handle file upload and send PUT request
  const handleUpload = async () => {
    if (file && pass) {

      try {
      const response = await axios.post('YOUR_API_ENDPOINT', pass);
        
      console.log('Upload successful:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }


    try {
      const formData = new FormData();
      formData.append('file', file);

      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await axios.put('YOUR_API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
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
    <input type="file" onChange={handleFileChange} />
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

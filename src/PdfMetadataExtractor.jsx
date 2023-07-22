import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import './PdfMetadataExtractor.css';

const PdfMetadataExtractor = () => {
  const [file, setFile] = useState(null);
  const [createdDate, setCreatedDate] = useState('');
  const [modifiedDate, setModifiedDate] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setLoading(true);

    try {
      const pdfBytes = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);

      const info = pdfDoc.getCreationDate();
      if (info) {
        setCreatedDate(info.toString());
      } else {
        setCreatedDate('Unknown');
      }

      const modDate = pdfDoc.getModificationDate();
      if (modDate) {
        setModifiedDate(modDate.toString());
      } else {
        setModifiedDate('Unknown');
      }
    } catch (error) {
      console.error('Error parsing PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">PDF Creation and Modified Date Viewer</h1>
      <div className="file-input">
        <label htmlFor="pdfFile">Select a PDF file:</label>
        <input type="file" id="pdfFile" onChange={handleFileChange} />
      </div>
      {isLoading ? (
        <div className="loader" />
      ) : (
        file && (
          <div className="metadata">
            <p className="metadata-item">Created Date: {createdDate}</p>
            <p className="metadata-item">Modified Date: {modifiedDate}</p>
          </div>
        )
      )}
      <h3>All data is processed locally inside your device</h3>
      <h5>Some PDF documents does not store the creation and modification date. Those documents tend to show the date which you are using this tool.</h5>
      <a href="/privacy">Privacy Policy</a>
    </div>
    
  );
};

export default PdfMetadataExtractor;

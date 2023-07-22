import React from 'react';
import PdfMetadataExtractor from './PdfMetadataExtractor';
import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicyPage from './PrivacyPolicyPage';


function App() {
  return (
    <Router>
      <div className="App">
        {/* SEO Head Tag */}
        {/* <Helmet> */}
          {/* <title>PDF Date Revealer</title>
          <meta name="description" content="Upload your PDF to see the date created and modified" />
          <meta name="keywords" content="PDF, metadata, created date, modified date, pdf created date, pdf modified date, when pdf was created, when pdf was modified" /> */}
          {/* <meta property="og:title" content="PDF Metadata Extractor" />
          <meta property="og:description" content="Upload your PDF to see the date created and modified" />
          <meta property="og:image" content="https://uploads-ssl.webflow.com/62cd339a7a0de22f5233071d/64bafa843b04844372dfe11c_card.png" />
          <meta property="og:url" content="https://pdfdaterevealer.web.app/" />
          <meta name="twitter:card" content="summary_large_image" /> */}
        {/* </Helmet> */}
        {/* Your other components or content here */}
        <Routes>
          <Route path="/" element={<PdfMetadataExtractor />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

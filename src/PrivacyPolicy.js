import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <p className="last-updated">Last updated: 22/07/2023</p>

      <section className="section">
        <h2>Information We Collect</h2>
        <p>
          We do not collect any personal information from you while you use the Service. Our web application runs solely on your browser, and no data is transmitted to our servers or any third-party services.
        </p>
        <p>
          However, it is important to note that the Service may require access to local files on your device, specifically PDF files, to extract the created and modified dates. The Service does not upload or store these files on our servers.
        </p>
      </section>

      <section className="section">
        <h2>Cookies and Similar Technologies</h2>
        <p>We do not use cookies or similar tracking technologies on our web application.</p>
      </section>

      <section className="section">
        <h2>Third-Party Services</h2>
        <p>The Service does not integrate or use any third-party services for data collection or analytics.</p>
      </section>

      <section className="section">
        <h2>How We Use the Information</h2>
        <p>
          As mentioned earlier, we do not collect any personal information or data from you. The Service only processes the PDF files locally on your browser to provide you with the created and modified dates of those files.
        </p>
      </section>

      <section className="section">
        <h2>Data Security</h2>
        <p>
          We take data security seriously. However, since the Service operates within your browser and does not transmit data to our servers or any external sources, it does not involve any data storage or security concerns on our end.
        </p>
      </section>

      <section className="section">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any significant changes by posting the updated Privacy Policy on this page.
        </p>
      </section>

      <section className="section contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
          <a color= "#fffff"href="mailto:fahadpnoushad@gmail.com">fahadpnoushad@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

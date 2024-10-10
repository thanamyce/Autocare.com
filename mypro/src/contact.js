import React from 'react';
import './help.css';

const Help = () => {
  return (
    <div className="help-page">
      <div className="container">
        <h1 className="help-title">Need Help? We’ve Got You Covered!</h1>
        <p className="help-description">
          Welcome to the AutoCare Help Center. Here you will find answers to common questions, guidance on our services, and how to contact us for further assistance.
        </p>

        <div className="help-section">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faq-item">
            <h3>How can I book a service?</h3>
            <p>You can book a service by logging into your account, navigating to the “Book a Service” section, and selecting your preferred date and time.</p>
          </div>

          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, debit cards, and online payment platforms such as PayPal and Google Pay.</p>
          </div>

          <div className="faq-item">
            <h3>Can I reschedule a service?</h3>
            <p>Yes, you can reschedule your service up to 24 hours before the scheduled time. Just log into your account and modify your booking.</p>
          </div>
        </div>

        <div className="contact-help">
          <h2>Still Need Help? Contact Us</h2>
          <p>
            If you have more questions or need further assistance, feel free to reach out to us. Our customer service team is here to help you with any queries.
          </p>
          <ul className="contact-list">
            <li>Email: support@autocare.com</li>
            <li>Phone: +1 234 567 8900</li>
            <li>Live Chat: Available 24/7</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;

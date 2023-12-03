import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <section>
        <h2>Candidate Details</h2>
        <p>
          <strong>First Name:</strong> Samyak
        </p>
        <p>
          <strong>Highest Degree Passout Year:</strong> Jun 2024
        </p>
        <p>
          <strong>Technologies/Languages:</strong>
          <ul>
            <li>
              <strong>Frontend Technologies:</strong> Html, css, javascript, tailwind css, material UI, Three js, and redux
            </li>
            <li>
              <strong>Backend Technologies:</strong> NodeJs, ExpressJS, jsonwebtoken, bcrypt, mongoDB, nodemailer, mongoose
            </li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Download Resume</h2>
        <p>
          Download my resume from{' '}
          <a href="https://drive.google.com/file/d/15SJma2VYPxguUT9MVgEwJtYtRSZ4VyFW/view?usp=sharing" target="_blank">
            Google Drive
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Calculate BMI</h2>
        <Link to="/bmi">Go to BMI Calculation Page</Link>
      </section>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <section>
        <h2>Candidate Details</h2>
        <p>
          <strong>First Name:</strong> John
        </p>
        <p>
          <strong>Highest Degree Passout Year:</strong> December 2022
        </p>
        <p>
          <strong>Technologies/Languages:</strong>
          <ul><strong>Frontend Technologies:</strong></ul>  Html, css, javascript, tailwind css, material UI, Three js and redux
          <ul><strong>Backend Technologies: </strong></ul>  NodeJs, ExpressJS, jsonwebtoken, bcrypt, mongoDB, 
        </p>
      </section>

      <section>
        <h2>Download Resume</h2>
        <p>Include a link to download the resume here.</p>
      </section>

      <section>
        <h2>Calculate BMI</h2>
        <Link to="/bmi">Go to BMI Calculation Page</Link>
      </section>
    </div>
  );
};

export default LandingPage;

import React from 'react';

export default function Resume () {
  return (
    <div className="resume">
  <h2>Harsh Patel</h2>
  <p>Software Developer | Web Developer</p>
  <p>
    <a href="mailto:harsh.patel8928@gmail.com">harsh.patel8928@gmail.com</a> | 
    <a href="https://linkedin.com/in/harsh-patel/">LinkedIn</a> | 
    <a href="https://patel-harsh.vercel.app" target="_blank">Portfolio</a>
  </p>
  <br />

  <h3>Education</h3>
  <p><strong>Computer Programming</strong> (January 2023 – August 2024)<br />Seneca Polytechnic, Toronto, ON</p>
  <ul>
    <li>CGPA: 3.8/4.0 with 4/4 GPA in 3rd Semester [President Honor List]</li>
  </ul>
  <br />

  <h3>Technical Skills</h3>
  <ul>
    <li>Programming Languages: JavaScript, C, C++, Python, HTML</li>
    <li>Web & Cloud Technologies: NodeJS, Express.js, React, Next.js, RestAPI, Tailwind CSS, Bootstrap, Git, GitHub</li>
    <li>Database Management: Oracle, SQL Database, PostgreSQL, ETL, MongoDB, NextAuth</li>
    <li>Project Management: Jira Software, Agile methodologies (Scrum/Kanban), Troubleshooting</li>
    <li>Applications: Windows, Unix/Linux, VS Code, SQL Server Management Studio, Visual Paradigm, Discord</li>
  </ul>
  <br />

  <h3>Experience</h3>
  <p><strong>Supervisor / Team Leader</strong> (April 2024 - Present)<br />Subway at SickKids Hospital, Part-time, Toronto, ON</p>
  <ul>
    <li>Led a team of 7, serving 2,450 customers weekly with a 98% satisfaction rate; revamped team efficiency by 20%.</li>
    <li>Reduced wait times by 25% during peak hours and resolved 15-20 weekly complaints with empathy.</li>
    <li>Managed inventory with 99% accuracy, optimizing supply orders and reducing waste by 10%.</li>
    <li>Fostered a positive work culture, enhancing team communication and customer loyalty.</li>
  </ul>
  <br />

  <p><strong>Junior Web Developer</strong> (2021 - 2022)<br />Mikkaso Corporation, Contract, India</p>
  <ul>
    <li>Composed customer-focused interfaces utilizing HTML, CSS3, and JavaScript frameworks, boosting user satisfaction metrics by 30% through intuitive design and seamless navigation experiences.</li>
    <li>Created mock designs and wireframes for 3 new products landing page, complete with documentation.</li>
    <li>Improved data handling efficiency by 15% through React components.</li>
    <li>Conducted unit testing and debugging, reducing bugs by 20% within the SDLC.</li>
    <li>Designed web applications with Next.js, enhancing user interface convenience by 25%.</li>
  </ul>
  <br />

  <h3>Projects</h3>
  <p><strong>SenecaCode</strong> (Tech Stack: React, Next.js, Node.js, Express.js, MongoDB, NextAuth)</p>
  <ul>
    <li>Generated a full-stack web application for 40-50 developers, enhancing collaboration.</li>
    <li>Integrated NextAuth for secure authentication, reducing page load times by 30%.</li>
    <li>Achieved overall performance boost by 25%, supporting up to 50 concurrent users.</li>
  </ul>
  <br />

  <p><strong>Museum Art Explorer</strong> (Tech Stack: React, Next.js, Node.js, MongoDB, Rest API, Git)</p>
  <ul>
    <li>Created a MERN stack application connecting users to global museum collections.</li>
    <li>Implemented an Advanced Search feature, boosting performance by 20%.</li>
    <li>Increased user engagement by 15% through efficient data fetching and state management.</li>
  </ul>
  <br />

  <p><strong>LegoSets Collection</strong> (Tech Stack: Node.js, Express.js, MongoDB, PostgreSQL)</p>
  <ul>
    <li>Developed a full-stack application for managing Lego sets with CRUD operations.</li>
    <li>Enhanced user experience with Tailwind CSS and AJAX, reducing load times by 5%.</li>
    <li>Improved inventory management efficiency by 25% for users managing up to 1,000 sets.</li>
  </ul>
  <br />

  <p><strong>School Management System</strong> (Tech Stack: C++, Oracle SQL)</p>
  <ul>
    <li>Led a team to create a Student-Faculty Management System for 100 users.</li>
    <li>Boosted query efficiency by 30%, enhancing administrative task performance.</li>
    <li>Implemented security measures to ensure data integrity and confidentiality.</li>
  </ul>
</div>
  );
};

export async function getStaticProps() {
    return {
      props: { title: 'Resume' },
    };
  }

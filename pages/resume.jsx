import React from 'react';

export default function Resume () {
  return (
    <div className="resume">
      <h2># Harsh Patel</h2>
      <p>Junior Web Developer | Database Administrator</p>
      <p>GitHub | hp9321649@gmail.com | +1 (437) 988-2583 | LinkedIn</p>
      <br />
      <h3>## OBJECTIVES</h3>
      <br />
      <p>
        In my pursuit as a diligent and inventive Computer Programming student, I am eager to leverage my robust background in software development, data analysis, and project management to excel as a Web Developer. My objective is to enhance technological progress and operational effectiveness within your vibrant setting by delivering meaningful solutions in web development and client support.
      </p>
      <br />
      <br />
      <h3>## EDUCATION</h3>
      <br />
      <p><strong>Computer Programming And Web Development</strong> 2023-2024<br />Seneca Polytechnic, Toronto</p>
      <ul>
        <li>CGPA: 3.7/4.0 with 4/4 GPA in 3rd Semester</li>
        <li>Focused on Software Engineering, Database Management Systems, and Frontend-web Development.</li>
        <li>Relevant Coursework: Web Development in React/Next.js, Database Management System, Data Structures and Algorithm, Introduction to UNIX/LINUX, Project Management Using Agile Methodology, Software Testing with SDLC</li>
      </ul>
      <br />
      <br />
      <h3>## PROJECTS</h3>
      <br />
      <p><strong>Lego Sets Management Website: Lego Collection</strong></p>
      <ul>
        <li>Overview: A sophisticated web-based application designed to manage Lego set collections, demonstrating advanced skills in full-stack development, data management, and user interface design.</li>
        <li>Technologies: Utilized Node.js and Express.js for constructing the server-side architecture, Sequelize interfaced with PostgreSQL for robust database operations, MongoDB for efficient session management, and Tailwind CSS in conjunction with AJAX for front-end development.</li>
        <li>Impact: The system optimized the process of collection management, enhancing user experience via effective data manipulation and a refined user interface.</li>
      </ul>
    <a href="https://assignment-2-ehpm.onrender.com"  target="_blank">Lego Collection</a>
    <br />
    <br />
      <p><strong>School Banking System Development</strong></p>
      <ul>
        <li>Overview: Engineered a Student-Faculty Management System to optimize the handling of student and faculty data.</li>
        <li>Technologies: Utilized C++ for application logic and Oracle SQL for database interactions, emphasizing secure and efficient data manipulation.</li>
        <li>Impact: The project underscored skills in secure database integration, complex system development, and efficient data management.</li>
      </ul>
    <br />
    <br />
      <h3>## SKILLS</h3>
      <br />
      <ul>
        <li>Proficient in Adobe Creative Suite, including InDesign, Illustrator, and Photoshop.</li>
        <li>Experience with HTML/CSS and familiarity with CMS platforms like Drupal.</li>
        <li>Strong grasp of UX/UI design principles, typography, and layout.</li>
        <li>Excellent communication, collaboration, and time management skills.</li>
        <li>Eagerness to learn and grow in a dynamic team environment.</li>
      </ul>
      <br />
      <br />
      <h3>## CERTIFICATIONS AND AWARDS</h3>
      <br />
      <p><strong>President’s Honor List</strong> Seneca College, 2023<br />Awarded for outstanding academic achievement with a perfect 4/4 CGPA.</p>
      <br />
      <br />
      <h3>## VOLUNTEER EXPERIENCE</h3>
      <br />
      <p><strong>VIRTUAL MENTOR FOR REMOTE LEARNING</strong> Seneca College, 2023 – Present</p>
      <br />
      <ul>
        <li>Provided personalized academic support through in-class assistance and problem solving.</li>
        <li>Facilitated virtual study groups to promote collaborative learning and peer support.</li>
        <li>Focused on fostering student engagement, motivation, and accountability in remote learning environments.</li>
        <li>Adapted strategies to address challenges such as technological limitations and communication barriers.</li>
        <li>Made a meaningful impact on students' academic success and online learning experiences.</li>
      </ul>
    </div>
  );
};

export async function getStaticProps() {
    return {
      props: { title: 'Resume' },
    };
  }

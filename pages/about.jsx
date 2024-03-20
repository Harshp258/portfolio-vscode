const AboutPage = () => {
  return (
    <>
      <pre>
        {`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Me</title>
          </head>
          <body>
            <div>

              <h2>About Me</h2>

              <p>Hey there! I'm Harsh Patel, a passionate Junior Web Developer and Database Administrator based in Toronto.</p>

              <p> With a background in Computer Programming and Web Development from Seneca Polytechnic,
              I'm dedicated to crafting engaging and user-friendly web experiences.</p>
              
              <p>My journey into the world of technology began with a fascination for problem-solving and a love for creativity. </p>
              
              <p>Throughout my education, I've honed my skills in software development, database management, and frontend-web development,
               constantly seeking to expand my knowledge and stay up-to-date with the latest trends and technologies.</p>
              
              <p>From building sophisticated web applications to optimizing database systems,
               I thrive on challenges and enjoy collaborating with talented teams to bring ideas to life.</p>
              
              <p>With a strong foundation in Adobe Creative Suite, HTML/CSS, and UX/UI design principles,
               I bring a unique blend of technical expertise and creative flair to every project I undertake.</p>
              
              <p>Outside of coding, you can find me exploring the latest tech innovations, indulging in outdoor adventures,
               or volunteering as a virtual mentor for remote learning initiatives.</p>
              
              <p>I'm always excited to connect with fellow tech enthusiasts, 
              so feel free to reach out and let's create something amazing together!</p>
            
              </div>
          </body>
          </html>
        `}
      </pre>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;

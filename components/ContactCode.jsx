import styles from '../styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'hp9321649@gmail.com',
    href: 'mailto:hp9321649@gmail.com',
  },
  {
    social: 'github',
    link: 'Harshp258',
    href: 'https://github.com/Harshp258',
  },
  {
    social: 'linkedin',
    link: 'Harsh  Patel',
    href: 'https://www.linkedin.com/in/harsh-patel-48a432260/',
  },

 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

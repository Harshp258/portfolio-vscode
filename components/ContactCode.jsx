import styles from '../styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'hasrh.patel8928@gmail.com',
    href: 'mailto:hasrh.patel8928@gmail.com',
  },
  {
    social: 'github',
    link: 'Harshp258',
    href: 'https://github.com/Harshp258',
  },
  {
    social: 'linkedin',
    link: 'Harsh  Patel',
    href: 'https://www.linkedin.com/in/HarshPatel258/',
  },

 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

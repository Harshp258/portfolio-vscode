import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Harsh Patel is a Front-end Developer"
      />
     
      <meta property="og:title" content="Harsh Patel Portfolio" />
      <meta
        property="og:description"
        content="A front-end developer building websites and applications."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://portfolio-vscode-swart.vercel.app/" />
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Harsh Patel',
};

import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Harsh Patel is a Software Developer"
      />
     
      <meta property="og:title" content="Harsh Patel Portfolio" />
      <meta
        property="og:description"
        content="A Software developer building websites and applications."
      />
      <meta property="og:image" content="https://imgur.com/qU9VXEL" />
      <meta property="og:url" content="https://portfolio-vscode-swart.vercel.app/" />
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Harsh Patel',
};

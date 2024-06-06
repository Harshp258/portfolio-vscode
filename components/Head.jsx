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
      
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Harsh Patel',
};

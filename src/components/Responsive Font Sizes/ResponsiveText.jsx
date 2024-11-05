import { useMediaQuery } from 'react-responsive';

const ResponsiveText = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const fontSize = isMobile ? '1rem' : '2rem';

  return <p style={{ fontSize }}>This text adjusts based on screen size.</p>;
};

export default ResponsiveText;

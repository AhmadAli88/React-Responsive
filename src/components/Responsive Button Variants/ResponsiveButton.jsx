import { useMediaQuery } from 'react-responsive';

const ResponsiveButton = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <button style={{ padding: isMobile ? '10px 20px' : '15px 30px', fontSize: isMobile ? '1rem' : '1.5rem' }}>
      Responsive Button
    </button>
  );
};

export default ResponsiveButton;

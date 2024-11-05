import { useMediaQuery } from 'react-responsive';

const ResponsiveImage = () => {
  const isRetina = useMediaQuery({ minResolution: '2dppx' });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const imageSrc = isMobile
    ? '/src/assets/p2.jpeg'
    : isRetina
    ? '/src/assets/p2.webp'
    : '/src/assets/p.jpg';

  return <img src={imageSrc} alt="Responsive" width={300}/>;
};

export default ResponsiveImage;

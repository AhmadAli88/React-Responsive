import { useMediaQuery } from 'react-responsive';

const DeviceSpecificContent = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-device-width: 768px) and (max-device-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-device-width: 1025px)' });

  return (
    <div>
      {isMobile && <p>Mobile-specific content</p>}
      {isTablet && <p>Tablet-specific content</p>}
      {isDesktop && <p>Desktop-specific content</p>}
    </div>
  );
};

export default DeviceSpecificContent;

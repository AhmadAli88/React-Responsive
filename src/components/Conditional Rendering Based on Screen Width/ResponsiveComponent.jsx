import { useMediaQuery } from 'react-responsive';

const ResponsiveComponent = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isDesktop && <p>This content is visible only on desktops.</p>}
      {isTablet && <p>This content is visible only on tablets.</p>}
      {isMobile && <p>This content is visible only on mobile devices.</p>}
    </div>
  );
};

export default ResponsiveComponent;

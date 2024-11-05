import { useMediaQuery } from 'react-responsive';

const ResponsiveLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return (
    <div style={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column' }}>
      <div style={{ flex: 1, padding: '10px', background: 'lightblue' }}>Left Side</div>
      <div style={{ flex: 2, padding: '10px', background: 'lightgreen' }}>Main Content</div>
    </div>
  );
};

export default ResponsiveLayout;

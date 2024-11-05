import { useMediaQuery } from 'react-responsive';

const ResponsiveGrid = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return (
    <div
      style={{
        display: 'grid',
        gap: '10px',
        gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : isTablet ? 'repeat(2, 1fr)' : '1fr',
      }}
    >
      {[...Array(8)].map((_, i) => (
        <div key={i} className="p-4 border rounded">Item {i + 1}</div>
      ))}
    </div>
  );
};

export default ResponsiveGrid;

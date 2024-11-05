import { useMediaQuery } from 'react-responsive';

const ResponsiveSidebar = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  
  return (
    <div className="flex">
      {isDesktop && <div className="w-1/4 p-4 bg-gray-100">Sidebar</div>}
      <div className="flex-1 p-4">Main Content</div>
    </div>
  );
};

export default ResponsiveSidebar;

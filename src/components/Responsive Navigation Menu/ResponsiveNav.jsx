import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const ResponsiveNav = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      {isMobile ? (
        <>
          <button onClick={toggleMenu}>
            ☰ {isMenuOpen ? 'Close Menu' : 'Open Menu'}
          </button>
          {isMenuOpen && (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          )}
        </>
      ) : (
        <ul style={{ display: 'flex', gap: '10px', listStyleType: 'none' }}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default ResponsiveNav;

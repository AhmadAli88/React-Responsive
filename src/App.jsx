import './App.css';
import ConditionalLogic from './components/Conditional Hook-based Logic/ConditionalLogic';
import ResponsiveComponent from './components/Conditional Rendering Based on Screen Width/ResponsiveComponent';
import DeviceSpecificContent from './components/Device Specific Content/DeviceSpecificContent';
import ResponsiveButton from './components/Responsive Button Variants/ResponsiveButton';
import ResponsiveGrid from './components/Responsive Cards or Grids/ResponsiveGrid';
import ResponsiveText from './components/Responsive Font Sizes/ResponsiveText';
import ResponsiveImage from './components/Responsive Image Sizing and Optimization/ResponsiveImage';
import ResponsiveLayout from './components/Responsive Layout Adjustments/ResponsiveLayout';
import ResponsiveNav from './components/Responsive Navigation Menu/ResponsiveNav';
import ResponsiveSidebar from './components/Responsive Sidebar Toggle/ResponsiveSidebar';

function App() {
  return (
    <div>
      <ResponsiveComponent />
      <ConditionalLogic/>
      <DeviceSpecificContent/>
      <ResponsiveButton/>
      <ResponsiveGrid/>
      <ResponsiveText/>
      <ResponsiveImage/>
      <ResponsiveLayout/>
      <ResponsiveNav/>
      <ResponsiveSidebar/>
    </div>
  );
}

export default App;

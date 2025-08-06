import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
const ScrollToTop = () => {
  const location = useLocation(); // Hook to get the current location
 
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page whenever the route changes
  }, [location]); // Re-run effect on location change
 
  return null; // This component doesn't render anything
};
 
export default ScrollToTop;
import { useState, useEffect } from 'react';

const useResizeWindow = () => {
  const [isWindowSmall, setIsWindowSmall] = useState(false);

  const checkResizeScreen = () => {
    setIsWindowSmall(window.innerWidth < 600) 
  }

  useEffect(() => {
    checkResizeScreen();
    window.addEventListener('resize', checkResizeScreen)

    return () => {
      window.removeEventListener('resize', checkResizeScreen)
    }
  }, []);

  return isWindowSmall;
};

export default useResizeWindow;
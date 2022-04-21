import {FunctionComponent, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {animateScroll} from 'react-scroll';

let prevLocation = '';
const exceptionLocation: string | string[] = [];

const RestoreScrollPosition: FunctionComponent = (): null => {
  const {pathname} = useLocation();

  const scrollConditions = () => {
    return !(
      exceptionLocation.includes(pathname) &&
      exceptionLocation.includes(prevLocation)
    );
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.addEventListener('beforeunload', windowBeforeUnloadHandler);
    const scrollY = localStorage.getItem('scrollBar');
    if (scrollY) {
      animateScroll.scrollTo(Number(scrollY), {
        duration: 800,
        delay: 100,
        offset: 0,
        smooth: 'easeInOutQuart',
      });

      localStorage.removeItem('scrollBar');
    } else if (scrollConditions()) {
      window.scrollTo(0, 0);
    }
    prevLocation = pathname;

    return () =>
      window.removeEventListener('beforeunload', windowBeforeUnloadHandler);
  }, [pathname]);

  const windowBeforeUnloadHandler = () =>
    localStorage.setItem('scrollBar', window.scrollY.toString());

  return null;
};

export default RestoreScrollPosition;

import { useEffect, useMemo, useState } from "react";

const useScrollTop = (): number => {
  const [scrollTop, setScrollTop] = useState(0);

  // Install Scroll listener
  useEffect(() => {
    document.addEventListener("scroll", handleScrollHeight);

    return () => {
      document.removeEventListener("scroll", handleScrollHeight);
    };
  }, []);

  const handleScrollHeight = () =>
    setScrollTop(document.scrollingElement!.scrollTop);

  return useMemo(() => scrollTop, [scrollTop]);
};

export default useScrollTop;

import { useEffect, useCallback, useRef } from "react";

const Observer = ({ callback }) => {
  const element = useRef();
  const handleObserver = useCallback(
    (entry) => {
      callback(entry[0].isIntersecting);
    },
    [callback]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    let observer;
    const obEle = element.current;
    if (obEle) {
      observer = new IntersectionObserver(handleObserver, options);
      observer.observe(obEle);
    }
    return () => observer.disconnect(obEle);
  }, [handleObserver]);
  return <div ref={element}></div>;
};

export default Observer;

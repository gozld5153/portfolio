import { useEffect, useCallback, useRef } from "react";

const Observer = ({ callback, marginStr }) => {
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
      rootMargin: marginStr,
      threshold: 0,
    };
    let observer;
    const obEle = element.current;
    if (obEle) {
      observer = new IntersectionObserver(handleObserver, options);
      observer.observe(obEle);
    }
    return () => observer.disconnect(obEle);
  }, [handleObserver, marginStr]);
  return <div ref={element}></div>;
};

export default Observer;

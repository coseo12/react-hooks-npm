export const useHover = (onHover) => {
  if (typeof onHover !== 'function') return;
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      elemnet.current.addEventListener('mouseenter', onHover);
    }
    return () => {
      if (element.current) {
        elemnet.current.addEventListener('mouseenter', onHover);
      }
    };
  }, []);
  return element;
};

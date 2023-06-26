import { useCallback, useEffect, useRef } from 'react';

const useHandleClickOutside = <T extends Node>({
  onClickOutside,
}: {
  onClickOutside: () => void;
}) => {
  const componentRef = useRef<T>(null);

  const onClickOutsideHandler = useCallback(onClickOutside, [onClickOutside]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const { current } = componentRef;
      const hasClickedInside = current?.contains(event.target as Node);
      if (!hasClickedInside) {
        onClickOutsideHandler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [componentRef, onClickOutsideHandler]);

  return componentRef;
};

export default useHandleClickOutside;

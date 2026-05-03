import { useRef } from "react";

export function useDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  const debouncedFunction = (value) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      callback(value);
    }, delay);
  };

  return debouncedFunction;
}
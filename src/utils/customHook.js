import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const savedIntervalCallback = useRef();

  useEffect(() => {
    savedIntervalCallback.current = callback;
  });

  useEffect(() => {
    let tick = () => {
      savedIntervalCallback.current();
    }
    if(delay !== null){
      let intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay])
}

const useListener = (type, callback) => {
  const saveKeyDownCallback = useRef();

  useEffect(() => {
    saveKeyDownCallback.current = callback;
  });

  useEffect(() => {
    let handle = (e) => {
      saveKeyDownCallback.current(e);
    }
    document.addEventListener(type, handle);
    return () => document.removeEventListener(type, handle)
  }, []);
};

export {useInterval, useListener};

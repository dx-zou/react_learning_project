import { useState, useEffect, useCallback, useReducer } from 'react';
import { useTitle } from 'ahooks';
import { Button } from 'antd';

const Index = () => {
  useTitle('拖动');
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const initialState = { count: 1 };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return { count: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onWindowResize = useCallback(() => {
    console.log(windowSize);
  }, [windowSize]);

  useEffect(() => {
    onWindowResize();
  }, [onWindowResize]);
  return (
    <div>
      <h1>test everything;</h1>
      <Button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        reducer hook
      </Button>
      <div>{state.count}</div>
    </div>
  );
};

export default Index;

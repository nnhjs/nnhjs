import React, { Fragment, useEffect, useReducer, useRef, useState } from 'react';
import { Flex } from '@radix-ui/themes';
import Countdown, { CountdownHandle } from 'src/Typescript/Countdown.tsx';

const initialState = { count: 0 };

type ACTIONTYPE = { type: 'increment'; payload: number } | { type: 'decrement'; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function TypescriptApp(props: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const divRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const countDownEl = useRef<CountdownHandle>(null);
  const [time] = useState(0);

  useEffect(() => {
    if (!divRef.current) throw Error('divRef is not assigned');

    console.log(divRef.current.getAttributeNames());
  });

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // console.log(time);
    }, 1000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    if (countDownEl.current) {
      countDownEl.current.start();
    }
  }, []);

  return (
    <Fragment>
      <div style={props.style} ref={divRef}>
        {props.childrenElement}
        {props.children}
      </div>
      <Flex gap="2">
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
      </Flex>
      <Countdown time={time} ref={countDownEl} />
    </Fragment>
  );
}

interface AppProps {
  children?: React.ReactNode;
  childrenElement: React.ReactElement;
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default TypescriptApp;

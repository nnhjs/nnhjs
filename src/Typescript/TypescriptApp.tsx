import React, { useEffect, useRef, useState } from 'react';
import type { CountdownHandle } from 'src/Typescript/Countdown.tsx';
import Countdown from 'src/Typescript/Countdown.tsx';
import Counter from 'src/Typescript/Counter.tsx';

interface AppProps {
  children?: React.ReactNode;
  childrenElement: React.ReactElement;
  style: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TypescriptApp(props: AppProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const countDownEl = useRef<CountdownHandle>(null);
  const [time] = useState(0);

  useEffect(() => {
    if (!divRef.current) throw Error('divRef is not assigned');

    console.log(`divRef.current`, divRef.current);
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
    <div id="typescript" ref={divRef}>
      {/*<div style={props.style} ref={divRef}>*/}
      {/*  {props.childrenElement}*/}
      {/*  {props.children}*/}
      {/*</div>*/}
      <Counter />
      {/*<Countdown time={time} ref={countDownEl} />*/}
    </div>
  );
}
export default TypescriptApp;

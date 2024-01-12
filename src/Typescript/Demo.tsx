import React, { useEffect, useRef } from 'react';
import type { CountdownHandle } from 'src/Typescript/Countdown.tsx';
import Counter from 'src/Typescript/Counter.tsx';

interface DemoProps {
  children?: React.ReactNode;
  childrenElement: React.ReactElement;
  style: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Demo(props: DemoProps) {
  // Mutable Refs
  const divRef = useRef<HTMLDivElement>(null);

  // Mutable Refs with initial is null
  const intervalRef = useRef<number | null>(null);

  // Not Mutable Refs with initial is null
  const countDownEl = useRef<CountdownHandle>(null);

  useEffect(() => {
    if (!divRef.current) throw Error('divRef is not assigned');
  });

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // do something
    }, 1000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    if (countDownEl.current) {
      countDownEl.current.start();
    }
  }, []);

  return (
    <div id="typescript" ref={divRef} style={props.style}>
      {props.children}
      {props.childrenElement}
      <Counter />
      {/*<Countdown time={time} ref={countDownEl} />*/}
    </div>
  );
}
export default Demo;

import React, { useEffect, useRef, useState } from 'react';
import Countdown, {
  CountdownHandle,
} from 'src/apps/App/Typescript/Countdown.tsx';
import Counter from 'src/apps/App/Typescript/Counter.tsx';

interface DemoProps {
  children: React.ReactNode;
  childrenElement: React.ReactElement;
  style: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Demo(props: DemoProps) {
  // Not Mutable Refs, this ref is readonly, initial = null but ts infer ref is HTMLDivElement
  const divRef = useRef<HTMLDivElement>(null);

  // Mutable Refs with initial is null
  const intervalRef = useRef<number | null>(null);

  // Not Mutable Refs, this ref is readonly, initial = null but ts infer ref is CountdownHandle
  const countDownRef = useRef<CountdownHandle>(null);

  const [time, setTime] = useState(10);
  const [isDecreasing, setIsDecreasing] = useState(true);

  useEffect(() => {
    if (!divRef.current) throw Error('divRef is not assigned');
  });

  useEffect(() => {
    if (isDecreasing) {
      intervalRef.current = setInterval(() => {
        // do something
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }
    return () => clearInterval(intervalRef.current!);
  }, [isDecreasing]);

  useEffect(() => {
    if (countDownRef.current && time === 0 && intervalRef.current) {
      countDownRef.current.start();
      clearInterval(intervalRef.current);
    }
  }, [time]);

  return (
    <div id="typescript" ref={divRef} style={props.style}>
      {props.childrenElement}
      {props.children}
      <Counter />
      <Countdown
        time={time}
        ref={countDownRef}
        isDecreasing={isDecreasing}
        setIsDecreasing={setIsDecreasing}
      />
    </div>
  );
}

export default Demo;

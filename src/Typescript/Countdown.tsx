import { forwardRef, useImperativeHandle } from 'react';

export type CountdownHandle = {
  start: () => void;
};

type CountdownProps = {
  time: number;
};

const Countdown = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    start: () => {
      // alert('Hello');
    },
  }));

  return <div>Countdown: {props.time}</div>;
});

Countdown.displayName = 'Countdown';

export default Countdown;

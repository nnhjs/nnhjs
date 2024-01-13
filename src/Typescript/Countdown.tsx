import { forwardRef, useImperativeHandle } from 'react';

export type CountdownHandle = {
  start: () => void;
};

type CountdownProps = {
  time: number;
  isDecreasing: boolean;
  setIsDecreasing: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const Countdown = forwardRef<
  CountdownHandle,
  CountdownProps
>((props, ref) => {
  const status = props.isDecreasing ? 'Stop' : 'Continue';

  useImperativeHandle(ref, () => ({
    start: () => {
      alert('Hello, world!');
    },
  }));

  return (
    <div>
      <span className="mr-4">Countdown: {props.time}</span>

      <button
        onClick={() => {
          props.setIsDecreasing((prev) => !prev);
        }}
        className="mr-4 rounded-md bg-red-100 p-2"
      >
        {status}
      </button>
    </div>
  );
});

Countdown.displayName = 'Countdown';

export default Countdown;

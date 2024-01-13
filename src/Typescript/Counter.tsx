import useCounter from 'src/hooks/useCounter.ts';

const Counter = () => {
  const { state, increment, decrement } = useCounter({
    step: 1,
    initialValue: 0,
  });
  return (
    <div className="my-4 border-4 border-dashed border-blue-100 py-4">
      Count: {state.count}
      <button
        onClick={increment}
        className="mx-4 w-8 rounded-md bg-blue-100 p-2"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="w-8 rounded-md bg-blue-100 p-2"
      >
        -
      </button>
    </div>
  );
};

export default Counter;

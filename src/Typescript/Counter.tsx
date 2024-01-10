import useCounter from 'src/hooks/useCounter.ts';

const Counter = () => {
  const { state, increment, decrement } = useCounter({
    step: 1,
    initialValue: 0,
  });
  return (
    <div>
      Count: {state.count}
      <button onClick={increment} className="bg-amber-100 p-2">
        +
      </button>
      <button onClick={decrement} className="bg-amber-50 p-2">
        -
      </button>
    </div>
  );
};

export default Counter;

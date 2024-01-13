import { useReducer } from 'react';

const initialState = (initialValue: number) => {
  if (initialValue) {
    return { count: initialValue };
  }
  return { count: 0 };
};

type ACTIONTYPE =
  | {
      type: 'increment';
      payload: {
        step: number;
      };
    }
  | {
      type: 'decrement';
      payload: {
        step: number;
      };
    };

function reducer(
  state: ReturnType<typeof initialState>,
  action: ACTIONTYPE
) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload.step };
    case 'decrement':
      return { count: state.count - action.payload.step };
    default:
      throw new Error();
  }
}

const useCounter = ({
  step,
  initialValue,
}: {
  step: number;
  initialValue: number;
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialValue,
    initialState
  );
  const increment = () =>
    dispatch({
      type: 'increment',
      payload: {
        step,
      },
    });
  const decrement = () =>
    dispatch({
      type: 'decrement',
      payload: {
        step,
      },
    });
  return { state, increment, decrement };
};

export default useCounter;

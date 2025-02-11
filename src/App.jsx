import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync } from './store/actions/counterActions';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(5))}>Increment Async by 5</button>
    </div>
  );
}

export default App;
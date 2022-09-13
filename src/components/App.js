import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../actions/action"
function App() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div id='main'>
      <h3 data-testid='counter'>{store.counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;

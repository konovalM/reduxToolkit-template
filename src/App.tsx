import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";

function App() {
  const {count} = useAppSelector(state => state.userReducer)
  const {increment, decrement} = userSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(5))}>Add</button>
      <button onClick={() => dispatch(decrement(5))}>Remove</button>
    </div>
  );
}

export default App;

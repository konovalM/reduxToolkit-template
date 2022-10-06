import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const { count, isLoading, error, users } = useAppSelector(
    (state) => state.userReducer
  );
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(5))}>Add</button>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!!users.length &&
        users.map((user) => (
          <div key={user.id}>
            {user.name} - {user.email}
          </div>
        ))}
    </div>
  );
}

export default App;

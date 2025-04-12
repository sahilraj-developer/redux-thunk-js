import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync } from './store/actions/counterActions';
import { fetchUsers } from './store/actions/userActions';

function App() {
  const count = useSelector((state) => state.counter.count);
  const { users, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(5))}>Increment Async by 5</button>


      <hr />
      <h2>Users</h2>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
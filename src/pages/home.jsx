import React from 'react';
import { useSelector } from 'react-redux';


function Home() {

  const { users, loading, error } = useSelector((state) => state.user);



  return (
    <div>

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

export default Home;
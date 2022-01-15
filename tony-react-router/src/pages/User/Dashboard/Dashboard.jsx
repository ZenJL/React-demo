import { useState, useEffect } from 'react';

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUser(data)
    };

    fetchUsers();
  }, [])

  return (
    <div className="App">
      {users.map(user => (
        <>
          <div key={user.id}>
            Name: {user.username}
            Email: {user.email}
            <button type="button">View Detail</button>
          </div>
          <br />
        </>
      ))}
    </div>
  );
}

export default App;

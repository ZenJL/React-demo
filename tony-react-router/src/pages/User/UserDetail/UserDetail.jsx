import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function UserDetail() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const history = useHistory();


  useEffect(() => {
    if(!userId) return;

    async function fetchUser() {
      const res = await fetch(`https://tony-json-server.herokuapp.com/api/users/${userId}`);
      const data = await res.json();
      setUser(data.data)
    };
    fetchUser();
  }, [userId])

  if(!user) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <div>
      <button type='button' onClick={() => history.goBack(-1)}>Back</button>
      <br />
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  width="30%" alt="" /><br />
      First Name: {user.firstName}<br />
      Last Name: {user.lastName}
    </div>
  )
}

export default UserDetail

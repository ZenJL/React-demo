import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LIMIT = 2;

function useQueryString() {
  return new URLSearchParams(useLocation().search)
}

function App() {
  const queryString = useQueryString();
  const queryPage = queryString.get('_page');
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(queryPage || 1);
  const [totalCount, setTotalCount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers(_page) {
      const res = await fetch(`https://tony-json-server.herokuapp.com/api/users?_page=${_page}&_limit=${LIMIT}`);
      const data = await res.json();
      setUser(data.data);
      setTotalCount(Math.ceil(data.pagination.totalCount / LIMIT));
      setPage(data.pagination.page)
    };
    history.replace({ pathname: '/', search: `_page=${page}&_limit=${LIMIT}`})
    fetchUsers(page);
  }, [history, page])

  const handleGoToDetail = userId => () => {
    history.push(`/user/${userId}`);
  }

  const handleGoToPage = number => () => {
    setPage(number);
  }

  return (
    <div className="App">
      {users.map(user => (
        <>
          <div key={user.id}>
            Id: {user.id} <br />
            Name: {user.firstName} {user.lastName}<br />
            Email: {user.email}<br />
            <button type="button" onClick={handleGoToDetail(user.id)}>View Detail</button>
          </div>
          <br />
        </>
      ))}
      <br />


      {totalCount > 0 && (
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {Array.from(Array(totalCount).keys()).map(item => (
              <li key={item} class="page-item" onClick={handleGoToPage(item + 1)}><span class="page-link">{item + 1}</span></li>
            ))}
          </ul>
        </nav>
      )}
      
    </div>
  );
}

export default App;

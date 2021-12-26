import { createContext, useContext, useEffect, useReducer } from 'react'

// services
import httpRequest from '../services/httpRequest';

// reducers
import { issueReducers, initialState, FETCH_ISSUE, ADD_ISSUE } from '../reducers/issueReducers';

const IssuesContext = createContext()

const IssueProvider = ({ children }) => {
  const [{ issues }, dispatch] = useReducer(issueReducers, initialState)

  // fetch issues
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await httpRequest.get('https://tony-json-server.herokuapp.com/api/todos');
        const data = res.data.data;

        dispatch({
          type: FETCH_ISSUE,
          payload: data
        })
      }
      fetchData()
    } catch (error) {
      throw new Error(error)
    }
  }, [dispatch]);

  // add issues
  function addIssue(item) {
    dispatch({
      type: ADD_ISSUE,
      payload: item
    })
  }

  // delete issues
  // function deleteIssue(issueId) {
  //   const newIssues = [...issues];
  //   const issueIndex = newIssues.findIndex(issue => issue.id === issueId);
  //   newIssues.splice(issueIndex, 1);
  //   setIssues(newIssues)
  // }


  return (
    <IssuesContext.Provider
      value={{
        issues,
        addIssue,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}

const useIssueContext = () => useContext(IssuesContext)

export {
  IssueProvider,
  useIssueContext,
}

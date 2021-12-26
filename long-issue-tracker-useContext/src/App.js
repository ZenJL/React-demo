import './App.css'

import MainLayout from 'layout/MainLayout';
import FormIssueTracker from 'components/FormIssueTracker'
import ListIssueTracker from 'components/ListIssueTracker'

function App() {
  return (
    <MainLayout>
      <FormIssueTracker />
      <ListIssueTracker />
    </MainLayout>
  )
}

export default App

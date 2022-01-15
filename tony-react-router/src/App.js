import { Switch, Route } from 'react-router-dom';

import UserDashboard from './pages/User/Dashboard/Dashboard';
import UserDetail from './pages/User/UserDetail/UserDetail';
import Login from './pages/Login/Login';

import MainLayout from './MainLayout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user/:id" component={UserDetail} />
        {/* <Route path="/" component={UserDashboard} /> */}
        <Route 
          path="/" 
          component={UserDashboard}
          render={(props) => <MainLayout><UserDashboard /></MainLayout>} 
          children={(props) => {
            console.log('children: ', props)
            return (
              <div>
                children
                <br />
                <UserDashboard />
              </div>
            )
          }}
        />
      </Switch>
    </div>
  );
}

export default App;


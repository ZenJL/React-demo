import { Switch, Route } from 'react-router-dom';

import UserDashboard from './pages/User/Dashboard/Dashboard';
import UserDetail from './pages/User/UserDetail/UserDetail';
import Login from './pages/Login/Login';

// Guards
import AuthGuard from './guards/AuthGuard';
import GuestGuard from './guards/GuestGuard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={() => <GuestGuard><Login /></GuestGuard>} />
        <Route path="/about" render={() => <GuestGuard><div>about page</div></GuestGuard>} />
        <Route path="/user/:userId" render={() => <AuthGuard><UserDetail /></AuthGuard>} />
        <Route path="/" render={() => <AuthGuard><UserDashboard /></AuthGuard>} />
      </Switch>
    </div>
  );
}

export default App;


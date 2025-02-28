import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import DeliveryTracking from './pages/DeliveryTracking';
import AdminDashboard from './pages/AdminDashboard';
import './styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tracking" component={DeliveryTracking} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
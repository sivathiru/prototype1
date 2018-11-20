import React, { Component } from 'react';
import './App.css';
import Login from '../src/components/authentication/login';
import Dashboard from './components/dashboard/dashboard';
import Task from './components/task/task';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// class App extends Component {
//   render() {
//     return (
//       <div>
//          <div className="App">
//          {/* <Login />
//          <MainMenu />
//          <Dashboard /> */}
//       </div>
     
   
//       </div>
//     );
//   }
// }

// export default App;


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/task" component={Task} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
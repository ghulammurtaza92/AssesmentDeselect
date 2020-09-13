import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddStudent from "./components/add-student";
import ViewStudent from "./components/view-students";

import {BrowserRouter as Router, Link,Route} from "react-router-dom";

function App() {
  return (<Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
                <Link to="/new" className="nav-link">Create Student</Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="nav-link">View Student</Link>
              </li>
              
            </ul>
          </div>
      </nav>

      <Route exact path={["/home", "/"]} exact component={ViewStudent} />
      <Route path="/new" component={AddStudent} />
    </div>
    </Router>);
}

export default App;

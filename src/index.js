import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Services from './Components/Services';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    
  </Router>,
  document.getElementById('root')
);


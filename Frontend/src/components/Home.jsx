import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/home.scss';


const Home = () => (
  <div className="main">
    <Link className="content" to="/todos">Welcome to Todo App &#10230;</Link>
  </div>);

export default Home;
import React from 'react';
import { Link } from 'react-router-dom'

import {routePaths} from "../utils/config";

import '../styles/home.scss';


const Home = () => (
  <div className="home-page">
    <Link className="content" to={routePaths.TASKS}>Welcome to Todo App &#10230;</Link>
  </div>);

export default Home;
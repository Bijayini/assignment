import React, { Fragment } from "react";

import TodoList from "../containers/TodoList";
import '../styles/todoList.scss';

import Header from "./Header";

const Todos = () => (
  <Fragment>
    <Header/>
    <TodoList />
  </Fragment>);

export default Todos;
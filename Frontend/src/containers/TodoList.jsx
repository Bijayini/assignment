import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import {deleteTask, fetchTasks} from "../actions";

import Error from "../pages/Error";

import Loader from "../ui-components/Loader";
import Button from "../ui-components/Button";

import labels from "../labels/TodoList.labels";

class TodoList extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTasks();
  }

  render(){
    const {tasks,error, loading, history:{push}, deleteTask} = this.props;
    if (error) {
        push('/error');
        return <Error message={error}/>
    }

    if (loading) {
      return <Loader/>;
    }

    return(
      <div className="main-content">
        <ul className="list-wrap wrap">
          {tasks.length ? tasks.map(task =>{
            return (<li key={task._id} className="list">
              <div className="list-header">
                <h3 className="heading">{task.title}</h3>
                <span className={`status ${task.status}`}>{task.status}</span>
              </div>
              <p className="description">{task.description}</p>
              <div className="hover-effect">
                <div className="button-container">
                  <Button variant="primary" size="small" onClick={()=>{}} classList="edit">{labels.edit}</Button>
                  <Button variant="primary" size="small" onClick={()=>{deleteTask(task._id)}}>{labels.delete}</Button>
                </div>
              </div>
            </li>)
          }):
          <p>No task found</p>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks && state.tasks.tasks || [],
  loading: state.tasks.loading,
  error: state.tasks.error,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => {
      dispatch(fetchTasks());
    },
    deleteTask: (id) => {
      dispatch(deleteTask(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(TodoList)
);

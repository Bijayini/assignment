import React, { Component } from "react";

import Loader from "../ui-components/Loader";
import Error from "../pages/Error";

import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

class TaskList extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTasks();
  }

  componentDidUpdate(prevProps){
    const {shouldRefresh} = this.props;
    if(shouldRefresh){
      this.props.fetchTasks();
    }
  }

  render(){
    const {tasks,error, loading, deleteTask, editTask} = this.props;
    if (error) {
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
                  <EditTask editTask={editTask} task={task}/>
                  <DeleteTask handelClick={deleteTask} id={task._id} />
                </div>
              </div>
            </li>)
          }): <p>No task found</p>}
        </ul>
      </div>
    );
  }
}


export default TaskList;

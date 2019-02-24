import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTasks } from "../actions";

import Loader from "../ui-components/Loader";
import Button from "../ui-components/Button";

class TodoList extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTasks();
  }

  render(){
    const {tasks,error, loading} = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <Loader/>;
    }

    return(
      <div className="main-content">
        <ul className="list-wrap wrap">
          {tasks.length && tasks.map(task =>{
            return (<li key={task.id} className="list">
              <div className="list-header">
                <h3 className="heading">{task.title}</h3>
                <span className={`status ${task.status}`}>{task.status}</span>
              </div>
              <p className="description">{task.description}</p>
              <div className="hover-effect">
                <div className="button-container">
                  <Button variant="primary" size="small" onClick={()=>{}} classList="edit">Edit</Button>
                  <Button variant="primary" size="small" onClick={()=>{}}>Delete</Button>
                </div>
              </div>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  loading: state.tasks.loading,
  error: state.tasks.error,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => {
      dispatch(fetchTasks());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TodoList,
);

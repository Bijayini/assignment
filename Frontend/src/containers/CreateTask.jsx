import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Modal from "../ui-components/Modal";

import { fetchTasks } from "../actions";


class CreateTask extends Component{
  static propTypes = {
    toggleOverlay: PropTypes.func.isRequired,
  };


  constructor(props){
    super(props);
  }

  render(){
    const {toggleOverlay} = this.props;
    const buttons = [
      {
        label: 'cancel',
        type: 'secondary',
        callback:toggleOverlay,
      },
      {
        label: 'continue',
        type: 'primary',
        callback: ()=>{},
      },
    ];
    return(
      <Modal toggleOverlay={toggleOverlay} buttons={buttons}>
        <h2>Create a Task</h2>
        <form>
          <div className="form-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title"/>
          </div>
          <div className="form-field">
            <label htmlFor="description">Description</label>
            <textarea id="description" />
          </div>
          <div className="form-field">
            <label htmlFor="status">Status</label>
            <select>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => {
      dispatch(fetchTasks());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateTask,
);

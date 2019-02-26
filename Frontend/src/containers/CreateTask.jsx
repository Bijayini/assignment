import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Modal from "../ui-components/Modal";

import { fetchTasks } from "../actions";

import labels from '../labels/CreateTask.labels';


class CreateTask extends Component{
  static propTypes = {
    toggleOverlay: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
        title:'',
        description:'',
        status:'',
    }
  }

  render(){
    const {toggleOverlay} = this.props;
    const buttons = [
      {
        label:labels.cancel,
        type: 'secondary',
        callback:toggleOverlay,
      },
      {
        label: labels.continue,
        type: 'primary',
        callback: ()=>{},
      },
    ];
    return(
      <Modal toggleOverlay={toggleOverlay} buttons={buttons}>
        <h3 className="modal-title">{labels.create_a_task}</h3>
        <form>
          <div className="form-field">
            <label htmlFor="title">{labels.title}</label>
            <input type="text" id="title" />
          </div>
          <div className="form-field">
            <label htmlFor="description">{labels.description}</label>
            <textarea id="description" />
          </div>
          <div className="form-field">
            <label htmlFor="status">{labels.status}</label>
            <select>
              <option value="">{labels.select_status}</option>
              <option value="in progress">{labels.in_progress}</option>
              <option value="completed">{labels.completed}</option>
              <option value="urgent">{labels.urgent}</option>
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

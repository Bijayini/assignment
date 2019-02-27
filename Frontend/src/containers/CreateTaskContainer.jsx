import React from "react";
import { connect } from "react-redux";

import { createTask } from "../actions";
import CreateTask from "../components/CreateTask";


const mapStateToProps = state => ({
    loading: state.tasks.loading,
    error: state.tasks.error,
});

const mapDispatchToProps = dispatch => {
  return {
    createTask: (payload) => {
      dispatch(createTask(payload));
    },
  };
};

const CreateTaskContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTask);

export default CreateTaskContainer;

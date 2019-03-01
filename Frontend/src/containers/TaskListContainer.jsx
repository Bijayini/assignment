import React from "react";
import { connect } from "react-redux";

import {deleteTask, editTask, fetchTasks} from "../actions";
import TaskList from "../components/TaskList";

const mapStateToProps = state => ({
    tasks: state.tasks && state.tasks.tasks || [],
    loading: state.tasks.loading,
    error: state.tasks.error,
    shouldRefresh:state.tasks.shouldRefresh
});

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => {
        dispatch(fetchTasks());
    },
    deleteTask: (id) => {
        dispatch(deleteTask(id));
    },
    editTask: (task, id) => {
        dispatch(editTask(task,id));
    },
});

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(
    TaskList,
);

export default TaskListContainer;
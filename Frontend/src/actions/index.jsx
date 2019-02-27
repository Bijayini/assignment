import axios from 'axios';
import history from '../utils/history';

import {apiPaths, routePaths} from '../utils/config';

import {
    FETCH_TASKS_BEGIN,
    FETCH_TASKS_FAILURE,
    FETCH_TASKS_SUCCESS,
    DELETE_TASK_BEGIN,
    DELETE_TASK_FAILURE,
    DELETE_TASK_SUCCESS,
    CREATE_TASK_FAILURE,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_BEGIN,
    EDIT_TASK_BEGIN,
    EDIT_TASK_FAILURE,
    EDIT_TASK_SUCCESS
} from "../constants/action-types";
import labels from "../labels/Task.labels";

export const fetchTasks = ()=>{
  return dispatch =>{
    dispatch(fetchTasksBegin());
    return axios.get(apiPaths.TASK_LIST)
      .then(res => {
        dispatch(fetchTasksSuccess(res.data.task));
        return res.data.task;
      })
      .catch(error => {
        dispatch(fetchTasksFailure(error.response ? error.response.data.message : labels.network_error));
        history.push(routePaths.ERROR);
      });
  }
};

export const fetchTasksBegin = () => ({
    type: FETCH_TASKS_BEGIN
});

export const fetchTasksSuccess = tasks => ({
    type: FETCH_TASKS_SUCCESS,
    payload: { tasks }
});

export const fetchTasksFailure = error => ({
    type: FETCH_TASKS_FAILURE,
    payload: {error}
});

export const deleteTask = (id)=>{
    return dispatch =>{
        dispatch(deleteTaskBegin());
        return axios.delete(apiPaths.DELETE_TASK(id))
            .then(res => {
                dispatch(deleteTaskSuccess(id));
                return id;
            })
            .catch(error => {
                dispatch(deleteTaskFailure(error.response ? error.response.data.message : labels.network_error));
                history.push(routePaths.ERROR)
            });
    }
};

export const deleteTaskBegin = () => ({
    type: DELETE_TASK_BEGIN
});

export const deleteTaskSuccess = (id) => ({
    type: DELETE_TASK_SUCCESS,
    payload: { id }
});

export const deleteTaskFailure = error => ({
    type: DELETE_TASK_FAILURE,
    payload: {error}
});

export const createTask = (payload)=>{
    return dispatch =>{
        dispatch(createTaskBegin());
        return axios.post(apiPaths.CREATE_TASK, payload)
            .then(res => {
                dispatch(createTaskSuccess(res.data));
                return res.data;
            })
            .catch(error => {
                dispatch(createTaskFailure(error.response ? error.response.data.message : labels.network_error));
                history.push(routePaths.ERROR)
            });
    }
};

export const createTaskBegin = () => ({
    type: CREATE_TASK_BEGIN
});

export const createTaskSuccess = payload => ({
    type: CREATE_TASK_SUCCESS,
    payload: { payload }
});

export const createTaskFailure = error => ({
    type: CREATE_TASK_FAILURE,
    payload: {error}
});

export const editTask = (task, id)=>{
    return dispatch =>{
        dispatch(editTaskBegin());
        return axios.put(apiPaths.UPDATE_TASK(id), task)
            .then(res => {
                dispatch(editTaskSuccess(task, id));
                return res;
            })
            .catch(error => {
                dispatch(editTaskFailure(error.response ? error.response.data.message : labels.network_error));
                history.push(routePaths.ERROR)
            });
    }
};

export const editTaskBegin = () => ({
    type: EDIT_TASK_BEGIN
});

export const editTaskSuccess = (task, id) => ({
    type: EDIT_TASK_SUCCESS,
    payload: { task, id }
});

export const editTaskFailure = error => ({
    type: EDIT_TASK_FAILURE,
    payload: {error}
});
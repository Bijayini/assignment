import axios from 'axios';

import {apiPaths} from '../utils/config';

import { FETCH_TASKS_BEGIN, FETCH_TASKS_FAILURE, FETCH_TASKS_SUCCESS,DELETE_TASK_BEGIN,DELETE_TASK_FAILURE,DELETE_TASK_SUCCESS } from "../constants/action-types";

export const fetchTasks = ()=>{
  return dispatch =>{
    dispatch(fetchTasksBegin());
    return axios.get(apiPaths.TASK_LIST)
      .then(res => {
        dispatch(fetchTasksSuccess(res.data.task));
        return res.data.task;
      })
      .catch(error => {
        dispatch(fetchTasksFailure(error.response.data.message));
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
        return axios.delete(apiPaths.TASK(id))
            .then(res => {
                dispatch(deleteTaskSuccess(res.data));
                return res.data;
            })
            .catch(error => {
                dispatch(deleteTaskFailure(error.response.data.message));
            });
    }
};

export const deleteTaskBegin = () => ({
    type: DELETE_TASK_BEGIN
});

export const deleteTaskSuccess = payload => ({
    type: DELETE_TASK_SUCCESS,
    payload: { payload }
});

export const deleteTaskFailure = error => ({
    type: DELETE_TASK_FAILURE,
    payload: {error}
});
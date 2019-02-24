import axios from 'axios';

import {apiPaths} from '../utils/config';

import { FETCH_TASKS_BEGIN, FETCH_TASKS_FAILURE, FETCH_TASKS_SUCCESS } from "../constants/action-types";

export const fetchTasks = ()=>{
  return dispatch =>{
    dispatch(fetchTasksBegin());
    return axios.get(apiPaths.TASK_LIST)
      .then(res => {
        dispatch(fetchTasksSuccess(res.data.tasks));
        return res.data.tasks;
      })
      .catch(error => {
        fetchTasksFailure(error)
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
  payload: { error }
});
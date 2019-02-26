import {
    DELETE_TASK_BEGIN, DELETE_TASK_FAILURE, DELETE_TASK_SUCCESS,
    FETCH_TASKS_BEGIN,
    FETCH_TASKS_FAILURE,
    FETCH_TASKS_SUCCESS
} from "../constants/action-types";
import initialState from "./initialState";

function tasksReducer(state = initialState, action) {
  switch (action.type){
    case FETCH_TASKS_BEGIN:
      return { ...state, loading: true};

    case FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error:action.payload.error};

    case FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload.tasks };

      case DELETE_TASK_BEGIN:
          return { ...state, loading: true};

      case DELETE_TASK_FAILURE:
          return { ...state, loading: false, error:action.payload.error};

      case DELETE_TASK_SUCCESS:
          return { ...state, loading: false, tasks: action.payload.tasks };


      default:
      return state;
  }
}

export default tasksReducer;
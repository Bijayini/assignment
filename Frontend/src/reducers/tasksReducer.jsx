import {
    DELETE_TASK_BEGIN, DELETE_TASK_FAILURE, DELETE_TASK_SUCCESS,
    FETCH_TASKS_BEGIN, FETCH_TASKS_FAILURE, FETCH_TASKS_SUCCESS,
    CREATE_TASK_BEGIN, CREATE_TASK_FAILURE, CREATE_TASK_SUCCESS,
    EDIT_TASK_BEGIN, EDIT_TASK_FAILURE, EDIT_TASK_SUCCESS
} from "../constants/action-types";
import initialState from "./initialState";
import {editArrayOfObject} from "./helper";

function tasksReducer(state = initialState, action) {
  switch (action.type){
    case FETCH_TASKS_BEGIN:
      return { ...state, loading: true,shouldRefresh:false};

    case FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error:action.payload.error, shouldRefresh:false};

    case FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload.tasks, shouldRefresh:false };

      case DELETE_TASK_BEGIN:
          return { ...state, loading: true};

      case DELETE_TASK_FAILURE:
          return { ...state, loading: false, error:action.payload.error};

      case DELETE_TASK_SUCCESS:
          const newTasks = state.tasks.filter(task=>task._id !== action.payload.id);
          return { ...state, loading: false, tasks:newTasks};

      case CREATE_TASK_BEGIN:
          return { ...state, loading: true};

      case CREATE_TASK_FAILURE:
          return { ...state, loading: false, error:action.payload.error};

      case CREATE_TASK_SUCCESS:
          return { ...state, loading: false, shouldRefresh:true};

      case EDIT_TASK_BEGIN:
          return { ...state, loading: true};

      case EDIT_TASK_FAILURE:
          return { ...state, loading: false, error:action.payload.error};

      case EDIT_TASK_SUCCESS:
          const updatedTasks = editArrayOfObject(state.tasks, action.payload.task,'_id', action.payload.id);
          return { ...state, loading: false,tasks:updatedTasks};

      default:
      return state;
  }
}

export default tasksReducer;
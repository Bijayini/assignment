import { FETCH_TASKS_BEGIN, FETCH_TASKS_FAILURE, FETCH_TASKS_SUCCESS } from "../constants/action-types";

const initialState = {
  tasks: [],
  loading: false,
  error: null
};

function tasksReducer(state = initialState, action) {
  switch (action.type){
    case FETCH_TASKS_BEGIN:
      return { ...state, loading: true};

    case FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error:action.payload.error};

    case FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload.tasks };

    default:
      return state;
  }
}

export default tasksReducer;
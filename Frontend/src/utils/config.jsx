const BASE_URL = 'http://localhost:9008/tasks';
export const apiPaths = {
  TASK_LIST:`${BASE_URL}/`,
  CREATE_TASK:`${BASE_URL}/create/`,
  DELETE_TASK:(id)=>`${BASE_URL}/delete/${id}`,
  UPDATE_TASK:(id)=>`${BASE_URL}/update/${id}`,
};


export const routePaths = {
  HOME:'/',
  TASKS:'/Tasks',
  ERROR:'/error'
};
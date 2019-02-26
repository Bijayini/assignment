const BASE_URL = 'http://localhost:9008/tasks';
export const apiPaths = {
  TASK_LIST:`${BASE_URL}/`,
  TASK:(id)=>`${BASE_URL}/delete/${id}`
};
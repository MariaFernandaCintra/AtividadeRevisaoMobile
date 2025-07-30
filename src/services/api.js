import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    accept: 'application/json',
  },
});


// GET /posts
export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

// GET /users
export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

// GET /todos
export const getTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};

export default api;
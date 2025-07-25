//API service for making request to the backend
import axios from 'axios';
// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle authentication errors
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

//API service
//User profile
export const getUserProfile = () => {
  return api.get('/user/profile');
};
export const updateUserProfile = (data) => {
  return api.put('/user/profile', data);
};
//Forum posts
export const getPosts = () => {
  return api.get('/forum/posts');
};

export const addPost = (data) => {
  return api.post('/forum/posts', data);
};

export const addComment = (postId, comment) => {
  return api.post(`/forum/posts/${postId}/comments`, { comment });
};

//Schedule
export const getSchedule = () => {
  return api.get('/schedule');
};

export const updateSchedule = (data) => {
  return api.put('/schedule', data);
};

export const createSchedule = (data) => {
  return api.post('/schedule', data);
};

export const deleteSchedule = (id) => {
  return api.delete(`/schedule/${id}`);
};

//resources
export const getResources = () => {
  return api.get('/resources');
};

export const addResource = (data) => {
  return api.post('/resources', data);
};

export const updateResource = (id, data) => {
  return api.put(`/resources/${id}`, data);
};

export const deleteResource = (id) => {
  return api.delete(`/resources/${id}`);
};

//authentication
export const login = (data) => {
  return api.post('/auth/login', data);
};

export const register = (data) => {
  return api.post('/auth/register', data);
}

export const signup = (data) => {
  return api.post('/auth/signup', data);
};

//questions
export const createQuestion = (data) => {
  return api.post('/questions', data);
};

export const getQuestionsByTopic = (topic) => {
  return api.get(`/questions/topic/${topic}`);
}

export const updateQuestion = (questionId, data) => {
  return api.put(`/questions/${questionId}`, data);
};

export const deleteQuestion = (questionId) => {
  return api.delete(`/questions/${questionId}`);
}

//answers
export const addAnswer = (questionId, data) => {
  return api.post(`/questions/${questionId}/answers`, data);
};

export const getAnswersByQuestion = (questionId) => {
  return api.get(`/questions/${questionId}/answers`);
};

export const updateAnswer = (questionId, answerId, data) => {
  return api.put(`/questions/${questionId}/answers/${answerId}`, data);
};

export const deleteAnswer = (questionId, answerId) => {
  return api.delete(`/questions/${questionId}/answers/${answerId}`);
};


import Axios from 'axios'
const axios = Axios.create();
const host = '/api/blog';

const token = localStorage.getItem('token')
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
});

const withId = (id) => `${host}/${id}`

export default {
  getAll: () => axios.get( host ),
  getById: (id) => axios.get( withId(id) ),
  post: (body) => axios.post( host,body ),
  put: (id,body) => axios.put( withId(id),body ),
  delete: (id) => axios.delete( withId(id) ),

  login: (credentials) => axios.post('/auth/login', credentials),
  signup: (userInfo) => axios.post('/auth/signup', userInfo)
}

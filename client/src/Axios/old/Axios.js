require('dotenv').config();
const axios = require('axios').create();
const host = 'http://localhost:5005/api/blog/';

const setHeader = (token) => {
    console.log(token)
    axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`
        return config
      });
}

const withId = (id) => `${host}${id}`

module.exports = {    
    setToken: (token) => setHeader(token),
    getAll: () => axios.get( host ),
    // getAll: () => console.log('getall fake log'),
    getById: (id) => axios.get( withId(id) ),
    postOne: (body) => axios.post( host,body ),
    put: (body,id) => axios.put( withId(id),body ),
    deleteById: (id) => axios.delete( withId(id) )
}
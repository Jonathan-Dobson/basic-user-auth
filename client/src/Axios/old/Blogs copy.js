import Axios from 'axios'

const axios = Axios.create();
const host = 'http://localhost:5005/api/blog/';



export const setHeader = (token) => {
    axios.interceptors.request.use((config) => {
        config.headers.baseURL = host
        config.headers.Authorization = `Bearer ${token}`
        return config
      });
}

// const withId = (id) => `${host}${id}`
  
// export const getAll = new Promise((resolve) => {

//     console.log('getting blogs')
//     axios.get( 'http://localhost:5005/api/blog/' ).then(r=>r)
    
// }
// )
// export const getById = (id) => axios.get( withId(id) )
// export const postOne = (body) => axios.post( host,body )
// export const put = (body,id) => axios.put( withId(id),body )
// export const deleteById = (id) => axios.delete( withId(id) )

// export const setToken = (token) => setHeader(token)
import React, { Component } from "react";
import axios from "axios";
const {setToken,getAll} = require('./Axios/Axios')

const blogAxios = axios.create()

blogAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})
const token = localStorage.getItem('token')

const done = ()=>new Promise(resolve=>{
    setToken(token)
    resolve()
})
done().then(()=>getAll().then().catch(e=>console.log(e)))

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            blogs: [],
            editBlog: null,
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token') || ""
        }
    }

    componentDidMount() {
        this.getBlogs();
    }

    signup = (userInfo) => {
        return axios.post('/auth/signup', userInfo)
            .then(res => {
                console.log(res.data)
                const {user,token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                this.setState({user,token})
                return res
            })
            .catch(e => alert(e.response.data.message))
    }

    login = (credentials) => {
      return axios.post('auth/login', credentials)
        .then(res=>{
            const {token,user} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            this.setState({user,token})
            this.getBlogs()
            return res
        })
    }

    logout = () => {
        console.log('logout')
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      this.setState({user:'',token:'',blogs:[]})
    }
    

    getBlogs = () => {
        // return getAll()
        return blogAxios.get("/api/blog")
            .then(response => {
                this.setState({ blogs: response.data });
                return response;
            })
    }

    addBlog = (newBlog) => {
        return blogAxios.post("/api/blog/", newBlog)
            .then(response => {
                this.setState(prevState => {
                    return { blogs: [...prevState.blogs, response.data] }
                });
                return response;
            })
    }

    getBlogById = (blogId) => {
        return blogAxios.get(`/api/blog/${blogId}`)
            .then(response => {
                this.setState({ editBlog: response.data });
                return response;
            })
    }

    saveBlog = (blogId, blog) => {
        return blogAxios.put(`/api/blog/${blogId}`, blog)
            .then(response => {
                this.setState(prevState => {
                    const updatedBlogs = prevState.blogs.map(blog => {
                        return blog._id === response.data._id ? response.data : blog
                    })
                    return { blogs: updatedBlogs }
                })
                return response;
            })
    }

    deleteBlog = (blogId) => {
        return blogAxios.delete(`/api/blog/${blogId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedBlogs = prevState.blogs.filter(blog => {
                        return blog._id !== blogId
                    })
                    return { blogs: updatedBlogs }
                })
                return response;
            })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    addBlog: this.addBlog,
                    getBlogs: this.getBlogs,
                    addBlog: this.addBlog,
                    editBlog: this.editBlog,
                    deleteBlog: this.deleteBlog,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
            >

                {this.props.children}

            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}

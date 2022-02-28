import React from 'react';
import Blog from "./Blog";
import AddBlogForm from "./AddBlogForm"
import { withContext } from "../AppContext";
import {Switch,Route} from "react-router-dom";
import {Button} from 'primereact/button';


function BlogList(props) {
    const blogs = props.blogs.map(blog => {
        return (
            <Blog
                history={props.history}
                key={blog._id}
                blog={blog}
                editBlog={props.editBlog}
                deleteBlog={props.deleteBlog}
                addBlog={props.addBlog}
                getBlog={props.getBlog}
            />
        )
    })

    return localStorage.getItem('token') 
    ? (
        <main>
            <h3>Blog Posts</h3>
            {blogs}
            <Switch>
                <Route path="/blogs/add" render={(props)=><AddBlogForm addBlog={props.addBlog}/>}/>
                <Route path="/blogs" render={(props)=><Button onClick={()=>props.history.push('/blogs/add')} icon="pi pi-plus" label="New Blog" className="p-button-success"/>} />
            </Switch>
            
        </main>
    )
    : <div></div>
}

export default withContext(BlogList);

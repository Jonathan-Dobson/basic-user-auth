import React, {useContext} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./Auth/ProtectedRoute";


import Navbar from "./Navbar";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import BlogList from "./Blogs/BlogList";
import EditBlogForm from "./Blogs/EditBlogForm";
import user from './AppContext'

import './index.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




export default () => {
    const user = useContext(user)

    return (
        <div className="App">

        hi
            {/* <Navbar/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <ProtectedRoute path="/blogs" component={BlogList}/>
                <ProtectedRoute path="/blog/edit/:id" component={EditBlogForm}/>
                <Route exact path="/" render={() => <Redirect to="/blogs"/>}/>
            </Switch> */}
        </div>
    )
}
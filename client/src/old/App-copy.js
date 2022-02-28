import React from 'react';
// import { Route, Switch, Redirect } from "react-router-dom";
// import ProtectedRoute from "./Auth/ProtectedRoute";

// import Navbar from "./Navbar";
// import Signup from "./Auth/Signup";
// import Login from "./Auth/Login";
// import BlogList from "./Blogs/BlogList";
// import EditBlogForm from "./Blogs/EditBlogForm";

import './index.css'

// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

import Red from './RedUser'

function App() {
    return (
        <div className="App">
            <div>hi</div>
            <Red />

            {/* <Navbar/> */}
            {/* <Switch> */}
                {/* <Route          path="/signup"          component = {Signup}/>
                <Route          path="/login"           component = {Login}/>
                <ProtectedRoute path="/blogs"           component = {BlogList}/>
                <ProtectedRoute path="/blog/edit/:id"   component = {EditBlogForm}/>
                <Route exact    path="/"                render={() => <Redirect to="/blogs"/>}/> */}
            {/* </Switch> */}
        </div>
    )
}

export default App;

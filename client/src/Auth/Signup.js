import React, { Component } from 'react';
import {withContext} from '../AppContext';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.username && this.state.password 
            ? this.props.signup(this.state)
                .then((params) => {
                    this.props.history.push('/blogs')
                })
                .catch(e=>alert(e.data))
            : alert('please enter username and password')
            // alert(JSON.stringify(this.state));
            // this.clearInputs();
    }

    render() {

        return (
            <>
            <h3>Sign Up</h3>
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}
                           value={this.state.username}
                           name="username"
                           type="text"
                           placeholder="Username"/>
                    <input onChange={this.handleChange}
                           value={this.state.password}
                           name="password"
                           type="password"
                           placeholder="Password"/>
                    <button type="submit">Create Account</button>
                </form>
            </div>
            </>
        )
    }
}

export default withContext(Signup);




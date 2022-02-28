import React, { Component } from 'react';
import {Button} from 'primereact/button';


class AddBlogForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        }
    }

    handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            title: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBlog(this.state)
            .then(response => {
                this.clearInputs()
            })
            .catch(err => console.error(err.response.data.message))
    }

    render() {
        return (
            <>
            <h4>Add New Blog</h4>
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Title"/>

                    <Button icon="pi pi-plus"/>
                </form>
            </div>
            </>
        )
    }
}

export default AddBlogForm;

import React, { Component } from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from "primereact/button";
import {Editor} from 'primereact/editor';
import {InputText} from 'primereact/inputtext';



class AddBlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            slug: "",
            category: "",
            body: "",
            id: null,
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        this.setState({id})
        console.log(this.props)
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
        this.props.saveBlog(this.state)
            .then(response => {
                this.clearInputs()
            })
            .catch(err => console.error(err.response.data.message))
    }

    render() {
        const center = {margin: 'auto'}
        const flex = {display: 'flex'}
        const column = {flexDirection: 'column'}
        const space = {margin: 24}
        return (
            <>
                <h4>Edit Blog</h4>
                <form style={{...flex,...column,...space}}>
                    <div>

                    {/* <label htmlFor="title">Title:</label> */}

                    <span className="p-float-label">
                        <InputText name="title" id="in" value={this.state.title} onChange={this.state.handleChange}/>
                        <label htmlFor="in">Title</label>
                    </span>
                    <span className="p-float-label">
                        <InputText name="title" id="in" value={this.state.slug} onChange={this.state.handleChange}/>
                        <label htmlFor="in">Slug</label>
                    </span>
                    <span className="p-float-label">
                        <InputText name="title" id="in" value={this.state.category} onChange={this.state.handleChange}/>
                        <label htmlFor="in">Category</label>
                    </span>
                    
                    <Editor style={{height:'320px'}} value={this.state.body} onTextChange={(e) => this.setState({body: e.htmlValue})} />
                    </div>
                    

                    <div style={flex}>
                    <Button label="Cancel" onClick={()=>this.props.history.goBack()} style={center}/>
                    <Button label="Save" className="p-button-success" style={center}/>
                    </div>
                </form>
            </>
        )
    }
}

export default AddBlogForm;

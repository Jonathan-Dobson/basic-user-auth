import React from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

function Blog(props) {
    const header = (
        <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>
    );
    const footer = (
        <span style={{display: 'flex'}}>
            <Button label="Edit" icon="pi pi-pencil" onClick={()=>props.history.push(`/blog/edit/${props.blog._id}`)}/>
            <Button label="" icon="pi pi-trash" className="p-button-danger" onClick={()=>props.deleteBlog(props.blog._id)}/>
        </span>
    );
    return (
        
        // <button onClick={() =>props.history.push(`/blog/edit/?${props.blog._id}`)} className="blog-item" href=''>
        // <Card>
        //     <h4>{props.blog.title}</h4>
        //     <p>{props.blog.category}</p>
        // </Card>
        // </button>
    <Card title={props.blog.title} subTitle={props.blog.category} style={{width: '360px'}} className="ui-card-shadow" footer={footer} >
        <div>{props.blog.body}</div>
    </Card>
    )
}

export default Blog;

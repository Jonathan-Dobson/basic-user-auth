import React from 'react';
import blog from '../Axios/Blogs'

// blog.setToken(localStorage.getItem('token'))


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title:null }
    }
    componentDidMount(){
        console.log('starting did mount')
        blog.postOne({title:'hello utah'}).then(r=>console.log(r.data))
        blog.getAll().then(r=>console.log(r.data))
        console.log('finished with did mount stuff')
    }
    render() { 
        return ''
    }
}
 
export default App;
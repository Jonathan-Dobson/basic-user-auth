import React from 'react';

const UserNameContext = React.createContext();

class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: 'fn',
         }
    }
    setName = (firstname) => {
        this.setState({firstname})
    }
    render() { 
        return (
            <div>
                <UserNameContext.Provider value={{name: this.state.firstname, setName: this.setName}}>
                    
                </UserNameContext.Provider>
            </div> 
         );
    }
}
 
export default UserProvider;
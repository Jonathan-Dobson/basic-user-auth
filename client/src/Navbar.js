import React from 'react';
import { Link } from "react-router-dom";
import { withContext } from './AppContext';

function Navbar(props) {
    return (
        <nav className="nav-bar">
            { props.token 
            ?   <>
                    <div className="nav-link">
                        <Link to="/blogs">Blogs</Link>
                    </div>
                    <div className="nav-link">
                        <Link onClick={props.logout} to="login">Logout</Link>
                    </div>
                </>
            :   <>
                    <div className="nav-link">
                        <Link to="/login">Log In</Link>
                    </div>
                    <div className="nav-link">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </>
            }
        </nav>
    )
}

export default withContext(Navbar);
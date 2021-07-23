import React, {useState, useEffect} from 'react';
import '../styles/signInUp.css';
import {useHistory } from 'react-router-dom';

function Navbar() {

    const [logged, setLogged] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            setLogged(true);
        }
    }, [logged]);

    const handleLogOut = () => {
            setLogged(false);
            localStorage.removeItem('access_token');
            localStorage.removeItem('user_id')
            localStorage.removeItem('to_do_lists')
            history.push("/");
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <p className='appName'>
                    ToDo-List
                </p>
                <p className={logged ? 'iconSignOut' : 'noIcon'}>
                    <i className="fas fa-sign-out-alt"  onClick={handleLogOut}/>
                </p>
            </nav>   
        </>
    )
}

export default Navbar;

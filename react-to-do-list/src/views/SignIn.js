import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function SignIn() {

    const [details, setDetails] = useState({identifier: "", password: ""});
    let history = useHistory();


    const saveLocal = () => {
        if(localStorage.getItem("access_token")){
            history.push("/todolist")
        }else{
            history.push("/")
        }
    }
    const submitfunc = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post("https://recruitment.ultimate.systems/auth/local", details).then(response => {
                if(response.data != null){
                    const token = response.data.jwt
                    const id = response.data.user.id
                    localStorage.setItem('access_token', JSON.stringify(token))
                    localStorage.setItem('user_id', id)
                }
                saveLocal()
            }   
        );
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mainContainer">
            <div className='logInContainer'>
                <h1 className="loginHeader">
                    Login
                </h1>
                <div className="formContainer">
                    <form onSubmit={submitfunc}>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                name="identifier"
                                className="form-control" 
                                id="SignInEmail" 
                                onChange={e => setDetails({...details, identifier: e.target.value})}
                                value={details.email}
                                placeholder="Email or username"/>
                        </div>
                        <div className="mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                id="SignInPassword"
                                onChange={e => setDetails({...details, password: e.target.value})}
                                value={details.password}/>
                        </div>
                        <button type="submit" className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </form>
                    <div className="createAccountContainer">
                        <p>
                            or
                        </p>
                        <Link to='/signup' className="accountLink">
                            <p className="createAccount">
                                create an account
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn

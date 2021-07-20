import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className="mainContainer">
            <div className='logInContainer'>
                <h1 className="loginHeader">
                    Login
                </h1>
                <div className="formContainer">
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="SignInEmail" placeholder="Email or username"/>
                        </div>
                        <div class="mb-3">
                            <input type="password" className="form-control" placeholder="Password" id="SignInPassword"/>
                        </div>
                        <button type="submit" className="btn btn-primary">
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

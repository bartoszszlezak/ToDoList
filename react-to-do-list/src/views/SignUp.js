import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="mainContainer">
            <div className='logInContainer'>
                <div className="accountLinkContainer">
                    <Link className="accountLink" to="/">
                        <i className="fas fa-arrow-left"/>
                    </Link>
                </div>
                
                <h1 className="loginHeader">
                    Create an new account
                </h1>
                <div className="formContainer">
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="SignUpUsername" placeholder="Username"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="SignUpEmail" placeholder="Email"/>
                        </div>
                        <div class="mb-3">
                            <input type="password" className="form-control" placeholder="Password" id="SignUpPassword"/>
                        </div>
                        <div class="mb-3">
                            <input type="password" className="form-control" placeholder="Repeat password" id="SignUpPasswordRepeat"/>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

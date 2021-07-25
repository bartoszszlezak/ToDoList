import React from 'react'
import { Link } from 'react-router-dom';
import Service from '../service/ServiceRegistration';
import validate from '../Validate/validateRegistration';


const SignUp = ({ submitForm }) => {

    const { handleChange, handleSubmit, values, errors } = Service(submitForm, validate);

    return (
        <div className="mainContainer">
            <div className='logInContainer'>
                <div className="accountLinkContainer">
                    <Link className="accountLink" to="/">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>

                <h1 className="loginHeader">
                    Create an new account
                </h1>
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="SignUpUsername"
                                name="username"
                                placeholder="Username"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className="singInfo">{errors.username}</p>}

                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="SignUpEmail"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="singInfo">{errors.email}</p>}
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name='password'
                                id="SignUpPassword"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="singInfo">{errors.password}</p>}
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

export default SignUp;

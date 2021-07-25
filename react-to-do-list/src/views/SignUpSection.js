import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

const SignUpSection = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>

            {!isSubmitted ? (
                <SignUp submitForm={submitForm} />
            ) : (
                <div className="mainContainer">
                    <Link to='/'>
                        <button type="button" class="btn btn-success">Success</button>
                    </Link>
                </div>
            )}


        </>
    );
};

export default SignUpSection;

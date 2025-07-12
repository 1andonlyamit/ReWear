import React from 'react';
import LoginForm from '../components/auth/LoginForm'; 

const loginPage = () => {
    return (
        <div className="login-page">
            {/* <h2>Login</h2> */}
            <LoginForm />
        </div>
    );
};

export default loginPage;
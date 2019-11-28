import React from 'react';
import './login.css';

const Login =()=>(
    <div className="container">
        <div className="login-box">
    	    <div className="lb-header">
      		    <a href="/login" className="active" id="login-box-link">Login</a>
      		    <a href="/register" id="signup-box-link">Sign Up</a>
    	    </div>

            <div className="social-login">
                <a href="/facebookLogin">
                    <span><i className="fab fa-facebook-square fa-2x"></i></span>
                    Login with facebook
                </a>
                <a href="/googleLogin">
                    <span><i className="fab fa-google fa-2x"></i></span>
                    Login with Google
                </a>
            </div>

            <form className="user-login" action="/login" method="POST">
                <div className="u-form-group">
                    <input type="username" placeholder="UserName" name="username"/>
                </div>
                <div className="u-form-group">
                    <input type="password" placeholder="Password" name="password"/>
                </div>
                <div className="u-form-group">
                    <button>Log in</button>
                </div>
                <div className="u-form-group">
                    <a href="/#" className="forgot-password">Forgot password?</a>
                </div>
            </form>
  	    </div>
    </div>
)

export default Login
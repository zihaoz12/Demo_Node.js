import React from 'react';
import '../Login/login.css';

const Register =()=>(
    <div className="container">
        <div className="login-box">
    	    <div className="lb-header">
      		    <a href="/login"  id="login-box-link">Login</a>
      		    <a href="/register"  className="active" id="signup-box-link">Sign Up</a>
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

            <form className="user-signup" action="/register" method="POST">
                <div className="u-form-group">
                    <input type="username" placeholder="UserName" name="username"/>
                </div>
                <div className="u-form-group">
                    <input type="password" placeholder="Password" name="password"/>
                </div>
                <div className="u-form-group">
                    <input type="password" placeholder="Confirm Password" name="confirme_password"/>
                </div>
                <div className="u-form-group">
                    <button>Register</button>
                </div>
                
            </form>
  	    </div>
    </div>
)

export default Register
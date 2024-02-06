import React from 'react';
import './ResetPasswordEmail.css'

const ResetPAsswordEmail = () => {
    function togglePasswordVisibility1(inputId, toggleIconId) {
        var passwordInput = document.getElementById(inputId);
        var toggleIcon = document.getElementById(toggleIconId);
      
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          toggleIcon.src = "./eye.png";  // Use an eye-open icon
        } else {
          passwordInput.type = "password";
          toggleIcon.src = "eye-slash.png";  // Use an eye-slash icon
        }
      }
      
  return (
    <div className="main">
      <div className="left"></div>
      <div className="right">
        <div>
          <div className="heading">
            <h2>Eat Good Naija</h2>
          </div>
          <div className="new">
            <p><h2 id="new">Reset your password</h2></p>
          </div>
          <div className="new-text">
            Enter your email below and we'll send you instructions on how to reset your password.
          </div>
        </div>
        <br /><br />
        <div className="signup-form">
          <form action="#" method="post">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <i>&#9993;</i>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <span
              className="toggle-password"
              onClick={() => togglePasswordVisibility1('passwordInput', 'toggleIcon')}
            >
              <img
                src="src/assets/eye-slash.png"
                alt="Toggle Confirm Password"
                id="toggleConfirmPassword1"
              />
            </span>
            </div>
            <button className="login-btn" type="submit">Send reset instructions</button>
          </form>
          <div className="forget-text">
            <p>Go back to <span className="sign-in-text"><a href="#">Sign in</a></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPAsswordEmail
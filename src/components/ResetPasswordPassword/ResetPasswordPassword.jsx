import React from 'react'
import './ResetPasswordPassword.css'

const ResetPasswordPassword = () => {
  return (
    <div className="main">
  <div className="left"></div>
  <div className="right">
    <div>
      <div className="heading">
        <h2>Eat Good Naija</h2>
      </div>
      <div className="new">
        <p>
          <h2 id="new">Reset your password</h2>
        </p>
      </div>
    </div>
    <br /><br /><br /><br />
    <div>
      <form action="#">
        <label htmlFor="password">Password</label>
        <div className="input-group">
          <span className="lock-icon">
            <img src="lock.png" alt="lock" />
          </span>
          <input type="password" id="password" name="password" required />
          <span
            className="toggle-password"
            onClick={() => togglePasswordVisibility1('password', 'togglePassword')}
          >
            <img src="eye-slash.png" alt="Toggle Password" id="togglePassword" />
          </span>
        </div>
        <label htmlFor="password">Confirm Password</label>
        <div className="input-group">
          <span className="lock-icon">
            <img src="lock.png" alt="lock" />
          </span>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
          <span
            className="toggle-password"
            onClick={() => togglePasswordVisibility1('confirmPassword', 'toggleConfirmPassword')}
          >
            <img src="eye-slash.png" alt="Toggle Confirm Password" id="toggleConfirmPassword" />
          </span>
        </div>
        <button className="login-btn" type="submit">Reset Password</button>
      </form>
    </div>
    <script src="./script.js"></script>
  </div>
</div>

  )
}

export default ResetPasswordPassword
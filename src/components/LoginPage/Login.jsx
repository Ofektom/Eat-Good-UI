import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('your-authentication-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
  
        if (response.ok) {
          // Authentication successful, you might redirect or update state accordingly
          console.log('Login successful');
        } else {
          // Authentication failed, handle errors
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
  };

  return (
    <div className="main">
      <div className="left"></div>
      <div className="right">
        <div className="heading">
          <h2>Eat Good Naija</h2>
        </div>
        <div className="new">
          <p>
            <h2 id="new">Login</h2>
          </p>
        </div>

        <div className="google-form">
          <form>
            <button>
              <span className="glogo">
                <img src="src/assets/images/google.png" alt="Google Logo" />
              </span>
              <span id="g-text">Sign Up with Google</span>
            </button>
          </form>
        </div>

        <div className="or-section">
          <div className="orleft"></div>
          <div className="or-text">OR</div>
          <div className="or-right"></div>
        </div>

        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <i>&#9993;</i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-group">
              <span className="lock-icon">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                👁️
              </span>
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>

          <div className="forget-text">
            <p>
              Already have an account?{' '}
              <span className="sign-in-text" href="#">
                Sign in here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import './SignUp.css';
import AuthService from '../../services/AuthService';

const SignUp = () => {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Add your signup logic here, e.g., call API to register the user
        try {
          await AuthService.signup(user);
          console.log('Signup successful');
          // Redirect or show success message
        } catch (error) {
          console.error('Signup failed:', error);
          // Handle signup error, e.g., show error message to the user
        }
    
        console.log('Signup submitted:', user);
    
        // Reset form fields after submission
        setUser({
          fullName: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        });
      };
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
  return (
    <div className="div">
      <div className="div-2">
        <div className="column">
          <img
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&"  
            className="img"
            alt="Logo"
          />
        </div>
        <div className="column-2">
          <div className="div-3">
            <div className="div-4">Eat Good Naija</div>
            <div className="div-5">Create a new account</div>
            
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

            <form onSubmit={handleSubmit}>
              <div className="div-13">Full name</div>
              <div className="div-14">
                <label htmlFor="fullName">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a24fa36a5f9fcce7f0f866585ee451e3013232d105bf0da103825cf42c987756?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                    className="img-3"
                    alt="Full Name"
                  />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={setUser.fullName}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="div-17">Email</div>
              <div className="div-18">
                <label htmlFor="email">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5de1fbdea27d7d4dfc7ced3eb22910cbda4fda0c7ef37966b06d763889cb188?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                    className="img-4"
                    alt="Email"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={setUser.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="div-20">Phone number</div>
              <div className="div-21">
                <label htmlFor="phoneNumber">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f966a282de4b23ba4dbba25a9a6fd03c248b4f6d1116b219ccf7393103c1ff8?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                    className="img-5"
                    alt="Phone Number"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8367db8174543975af3e9df8e10c1f170b693b30184050fe32f76c92ebb28a?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                    className="img-6"
                    alt="Phone Number"
                  />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={setUser.phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </label>
              </div>
              <div className="div-23">Password</div>
              <div className="div-24">
                <label htmlFor="password">
                  <div className="div-25">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfce1ef306069881af75d840a12e3e2fc4824cc460e3af71ac1f309769e691d6?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                      className="img-7"
                      alt="Password"
                    />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={setUser.password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </label>
              </div>
              <div className="div-27">Confirm password</div>
              <div className="div-28">
                <label htmlFor="confirmPassword">
                  <div className="div-29">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc2e7b098ebc31f2a9976584e041b3810d31d71bfed20416429b08a20bb560a?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                      className="img-9"
                      alt="Confirm Password"
                    />
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={setUser.confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </label>
              </div>
              <button type="submit" className="div-31">
                Submit
              </button>
            </form>
            <div className="div-32">
              Already have an account?{' '}
              <span
                style={{
                  fontWeight: 600,
                  textDecoration: 'underline',
                  color: 'rgba(47, 128, 237, 1)',
                }}
              >
                Sign in here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

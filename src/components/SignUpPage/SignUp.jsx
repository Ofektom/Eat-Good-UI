import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import logoImage2 from "/src/assets/images/thai-hot-pot.png";

const SignUp = () => {
    const navigate = useNavigate();
    const[token, setToken] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
      fullName: "",
      username: "",
      country: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  
    const { fullName, username, password, confirmPassword } =
      user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (phoneNumber, country) => {
      setUser({ ...user, phoneNumber, country: country.name });
  };

  localStorage.setItem("googleToken", token)
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post("http://localhost:8081/api/v1/auth/customer-sign-up", user, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        setShowModal(true);
        setStatus(true);
        setSuccessMessage("Success");
        setModalMessage("Email Sent Successfully!");
        
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } catch (error) {
        // Handle the error here
        console.error("Error during registration:", error);
  
        setStatus(false);
        setErrorMessage("Error");
  
        setShowModal(true);
        setModalMessage(
          error.response?.data?.message ||
          "An error occurred during registration. Please try again."
        );
      }
    };
  
    const handleClose = () => {
      setShowModal(false);
      setSuccessMessage("");
      setErrorMessage("");
      setModalMessage("");
    };

    function togglePasswordVisibility1(inputId, toggleIconId) {
        var passwordInput = document.getElementById(inputId);
        var toggleIcon = document.getElementById(toggleIconId);
      
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          toggleIcon.src = "./eye.png";
        } else {
          passwordInput.type = "password";
          toggleIcon.src = "eye-slash.png";
        }
      }
  
  return (
      <div className="customer-div-2">
        <div className="customer-column">
          <img
            src="src/assets/images/Desktop - 3 (1).png"  
            className="customer-img"
            alt="Logo"
          />
        </div>
        <div className="customer-column-2">
          <div className="customer-div-3">
            <Link to={"/"} className='landing-logo1'>
              <img src={logoImage2} alt="logo" className='landing-logo-image1' />
              <p className="vendor-div-4">Chow</p>
            </Link>
            <div className="customer-div-4-5">Customer</div>
            <div className="customer-div-5">Create a new account</div>
          </div>

          <div className='google-with-form'>
            <div className='customer-form-higher'>
              <div className='customer-google-or'>
                <div className="customer-google">
                    <GoogleLogin
                
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        setToken(credentialResponse.credential);
                        navigate("/product-dashboard");
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      style={{ width: '438px', height: '48px', marginTop: '-20px' }}
                      />
                    </div>
                    <p id="signup-para">
                      </p><hr id="signup-horizontal" /> 
                      <span id="signup-or">OR</span>
                      <span><hr id="signup-hori" /></span>
                    <p/>
                </div>
                <form onSubmit={onSubmit} className='customer-form'>
                  <div className="customer-div-13">Full name</div>
                  <div className="customer-div-14">
                    <label htmlFor="fullName">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a24fa36a5f9fcce7f0f866585ee451e3013232d105bf0da103825cf42c987756?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                        className="customer-img-3"
                        alt="Full Name"
                      />
                      
                    </label>
                    <input
                        type="text"
                        className="customer-input"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => onInputChange(e)}
                      />
                  </div>


                  <div className="customer-div-17">Email</div>
                  <div className="customer-div-18">
                    <label htmlFor="username">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5de1fbdea27d7d4dfc7ced3eb22910cbda4fda0c7ef37966b06d763889cb188?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                        className="customer-img-4"
                        alt="Email"
                      />
                      
                    </label>
                    <input
                        type="email"
                        className="customer-input"
                        name="username"
                        placeholder="Enter your email"
                        value={username}
                        onChange={(e) => onInputChange(e)}
                      />
                  </div>
                  <div className="customer-div-20">Phone number</div>
                  <div className="customer-div-21">
                        <PhoneInput
                            inputStyle={ {

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                width: "416px",
                                height: "35px",
                                gap: "2px",
                                padding: "10px 16px 10px 45px",
                                marginRight: "-120px",
                                border: "1px solid #828282",
                                borderRadius: "4px",
                                paddingLeft:"50px",
                                position: "absolute",
                                top: "-4px",

                        }
                            }

                            country={'us'}
                            value={user.phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="Enter your Phone Number..."


                            inputProps={{
                                required: true,
                                autoFocus: true,
                            }}
                        />

                    </div>
                  <div className="customer-div-23">Password</div>
                  <div className="customer-div-24">
                    <label htmlFor="password">
                      <div className="customer-div-25">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfce1ef306069881af75d840a12e3e2fc4824cc460e3af71ac1f309769e691d6?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                          className="customer-img-7"
                          alt="Password"
                        />
                       
                      </div>
                    </label>
                    <input
                          type="password"
                          className="customer-input"
                          name="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => onInputChange(e)}
                          onClick={() => togglePasswordVisibility1('passwordInput', 'toggleIcon')}
                        />
                  </div>
                  <div className="customer-div-27">Confirm password</div>
                  <div className="customer-div-28">
                    <label htmlFor="confirmPassword">
                      <div className="customer-div-29">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc2e7b098ebc31f2a9976584e041b3810d31d71bfed20416429b08a20bb560a?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
                          className="customer-img-9"
                          alt="Confirm Password"
                        />
                        <input
                          type="password"
                          className="customer-input"
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) => onInputChange(e)}
                          onClick={() => togglePasswordVisibility1('passwordInput', 'toggleIcon')}
                        />
                      </div>
                    </label>
                  </div>
                  <button type="submit" className="customer-div-31">
                    Submit
                  </button>
                </form>
              </div>
              <div className='customer-form-lower'>
              <div className="customer-div-32">
                Already have an account?{' '}
                <span>
                  <Link to={"/Login"}>
                    Sign in here
                  </Link>
                </span>
              </div>
              </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {status ? successMessage : errorMessage}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="customer-modal-body">{modalMessage}</Modal.Body>
              <Modal.Footer>
                <Button
                  className="customer-modal-close"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
      </div>
  );
};

export default SignUp;

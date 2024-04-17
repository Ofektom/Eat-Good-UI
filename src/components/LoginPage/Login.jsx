import { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import logoImage1 from "/src/assets/images/thai-hot-pot.png";

const Login = () => {
    const navigate = useNavigate();
    // const { credential } = useParams();
    const [showModal, setShowModal] = useState(false);
    const { credential } = useParams();
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
      username: "",
      password: "",
    });
  
    const { username, password } = user;

    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
  
    };

    useEffect(() => {
      // Load Google Sign-In API script
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.onload = () => {
        // Initialize Google Sign-In API
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: '995760024175-tl4qnsoi4ecechr40hkeql794jggsa0v.apps.googleusercontent.com',
          });
        });
      };
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);


    const onGoogleSubmit = async () => {
      try {
        // Use Google Sign-In API to get user's profile
        const auth2 = window.gapi.auth2.getAuthInstance();
        const googleUser = await auth2.signIn();
  
        // Get user's Google ID token
        const idToken = googleUser.getAuthResponse().id_token;
  
        // Send the ID token to your backend for vzerification and token generation
        const response = await axios.get(
          `http://localhost:8081/api/v1/auth/google/${credential}`,
          { idToken },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
  
        const token = response.data;
  
        // Save the token to localStorage
        localStorage.setItem("jwtToken", token);
  
        setShowModal(true);
        setStatus(true);
        setSuccessMessage("Success");
        setModalMessage("Welcome to Eat Good Naija!");
  
        setTimeout(() => {
          navigate("/product-dashboard");
        }, 800);
      } catch (error) {
        // Handle the error here
        console.error("Error during Google Sign-In:", error);
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred during Google Sign-In. Please try again.";
  
        setStatus(false);
        setErrorMessage("Error");
  
        setShowModal(true);
        setModalMessage(errorMessage);
      }
    };


    const onSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post(
          "http://localhost:8081/api/v1/auth/login",
          user,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
    
        const token = response.data;
        console.log("Login Token:", token);
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.role;
        const userFullName = decodedToken.fullName;
        const userId = decodedToken.id;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userRole", JSON.stringify(userRole));
        localStorage.setItem("userFullName", JSON.stringify(userFullName));
        localStorage.setItem('userId', JSON.stringify(userId))
        console.log(userRole);
    
        setShowModal(true);
        setStatus(true);
        setSuccessMessage("Success");
        setModalMessage("Welcome to Bellefu!");

        if (userRole === "VENDOR") {
          setTimeout(() => {
            navigate("/admin-dashboard");
          }, 1000);
        } else if (userRole === "CUSTOMER") {
              setTimeout(() => {
                navigate("/dash");
              }, 1000);
      }
      } catch (error) {
        console.error("Error during Login:", error);
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred during Login. Please try again.";
    
        setStatus(false);
        setErrorMessage("Error");
    
        setShowModal(true);
        setModalMessage(errorMessage);
      }
    };



    const handleClose = () => {
      setShowModal(false);
      setSuccessMessage("");
      setErrorMessage("");
      setModalMessage("");
    };

    

    function togglePasswordVisibility(inputId, toggleIconId) {
        var passwordInput = document.getElementById(inputId);
        var toggleIcon = document.getElementById(toggleIconId);
      
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          toggleIcon.src = "../src/assets/eye.png";
        } else {
          passwordInput.type = "password";
          toggleIcon.src = "../src/assets/eye-slash.png";
        }
      }
  

  return (
    <div className="main">
      <div className="left">
        <img src="../src/assets/images/images.png" alt="" />
      </div>
      <div className="right">
        <div className="heading">
            <Link to={"/"} className='landing-logo3'>
              <img src={logoImage1} alt="logo" className='landing-logo-image3' />
              <p className="login-div-4">Chow</p>
            </Link>
          <h2 className='heading-welcome'>Welcome Back</h2>
        </div>
        <div className='login-form-google'>
        <button className="google-button" onSubmit={(e) => onGoogleSubmit(e)}>
            <img id="img6" src="../src/assets/images/google.png" />
            <span className="googe-text">Sign In with Google</span>
          </button>

            <div className="or-section">
              <div className="orleft"></div>
              <div className="or-text">OR</div>
              <div className="or-right"></div>
            </div>

        <div className="signup-form">
        <form onSubmit={(e) => onSubmit(e)}>

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
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={onInputChange}
                    />
                    <span className="eye-icon" onClick={() => togglePasswordVisibility("password", "toggleIcon")}>
                      <img id="toggleIcon" src="../src/assets/eye.png" alt="Toggle Password Visibility" />
                    </span>
                  </div>

          

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>

          <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {status ? successMessage : errorMessage}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">{modalMessage}</Modal.Body>
              <Modal.Footer>
                <Button
                  className="modal-close"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>

          <div className="signup-text">
            <p>
              Dont have an account?{' '}
              <Link to={"/signup"}><span className="sign-in-text">
              Sign up here
            </span>
            </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

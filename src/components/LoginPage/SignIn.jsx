import React, { useState } from 'react';
import './Login.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
    const { credential } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
      email: "",
      password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onGoogleSubmit = async (e) => {
      e.preventDefault();


      try {
          const response = await axios.get(
              `http://localhost:8081/api/v1/auth/google/${credential}`
          );


          const token = response.data;
          localStorage.setItem("jwtToken", token);

          console.log("JWT Token:", token);

          setShowModal(true);
          setStatus(true);
          setSuccessMessage("Success");

          setModalMessage("Welcome to Smart Quiz App!");

          setTimeout(() => {
              navigate("/product-dashboard");
          }, 800);
      } catch (error) {
          navigate("/product-dashboard");
          // Handle the error here
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

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8081/api/v1/auth/login",
  //       user,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const { token, role } = response.data;
  //     localStorage.setItem("jwtToken", token);

  //     console.log("JWT Token:", token);

  //     setShowModal(true);
  //     setStatus(true);
  //     setSuccessMessage("Success");

  //     setModalMessage("Welcome to Eat Good Naija!");

  //     // Set a 2-second delay before navigating to the appropriate dashboard based on the user's role
  //     setTimeout(() => {
  //       if (role === 'vendor') {
  //         navigate("/vendor-dashboard");
  //       } else if (role === 'customer') {
  //         navigate("/customer-dashboard");
  //       } 
  //     }, 2000);
  //   } catch (error) {
  //     // Handle the error here
  //     console.error("Error during Login:", error);
  //     const errorMessage =
  //       error.response?.data?.message ||
  //       "An error occurred during Login. Please try again.";

  //     setStatus(false);
  //     setErrorMessage("Error");

  //     setShowModal(true);
  //     setModalMessage(errorMessage);
  //   }
  // };


  const onSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post(
              "http://localhost:8081/api/v1/auth/login",
              user,
              {
                  headers: {

                      "Content-Type": "application/json",
                  },
              }
          );

          console.log("Login Response:", response);

          const token = response.data;
          localStorage.setItem("jwtToken", token);

          console.log("JWT Token:", token);

          setShowModal(true);
          setStatus(true);
          setSuccessMessage("Success");

          setModalMessage("Welcome to Eat Good Naija!");

          // Set a 5-second delay before navigating to "/signin"
          setTimeout(() => {
              navigate("/product-dashboard");
          }, 1000);
      } catch (error) {
          // Handle the error here
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
        <div className="heading">
          <h2>Eat Good Naija</h2>
        </div>
        <div className="new">
          <p>
            <h2 id="new">Login</h2>
          </p>
        </div>

        <form onSubmit={(e) => onGoogleSubmit(e)}>
              <button className="google-button">
                <img id="img6" src="../src/assets/icons/Google.png" />
                <span className="googe-text">Sign In with Google</span>
              </button>
            </form>

        <div className="or-section">
          <div className="orleft"></div>
          <div className="or-text">OR</div>
          <div className="or-right"></div>
        </div>

        <div className="signup-form">
        <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <i>&#9993;</i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-group">
              <span className="lock-icon">🔒</span>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => onInputChange(e)}
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

          <div className="forget-text">
            <p>
              Dont have an account?{' '}
              <span className="sign-in-text" href="#">
                Sign up here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

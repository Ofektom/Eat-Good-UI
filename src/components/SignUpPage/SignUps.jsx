// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// import './signup.css';


// const SignUp = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisibility, setPasswordVisibility] = useState(false);
//   const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
//   const navigate = useNavigate(); // Use useNavigate


//   const togglePasswordVisibility = () => {
//     setPasswordVisibility(!passwordVisibility);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisibility(!confirmPasswordVisibility);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//      try {
//       // Validate passwords match
//       if (password !== confirmPassword) {
//         console.error('Passwords do not match');
//         return;
//       }

//       // Create user data object
//       const userData = {
//         fullName,
//         email,
//         phoneNumber,
//         password,
//       };

//       await AuthService.signup(userData);

//       navigate('/login'); // Use navigate
//     } catch (error) {
//       console.error('Signup failed:', error);
//     }

//     console.log('Signup submitted:', {
//       fullName,
//       email,
//       phoneNumber,
//       password,
//       confirmPassword,
//     });

//     // Reset form fields after submission
//     setFullName('');
//     setEmail('');
//     setPhoneNumber('');
//     setPassword('');
//     setConfirmPassword('');

//   };

//   return (
//     <div className="div">
//       <div className="div-2">
//         <div className="column">
//           <img
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69409aca8ab365c6967f8103e510c7783b19598b9ceadf9eef6b3070ec815e4d?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//             className="img"
//             alt="Logo"
//           />
//         </div>
//         <div className="column-2">
//           <div className="div-3">
//             <div className="div-4">Eat Good Naija</div>
//             <div className="div-5">Create a new account</div>
//             <form onSubmit={handleSubmit}>
//               <div className="div-13">Full name</div>
//               <div className="div-14">
//                 <label htmlFor="fullName">
//                   <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/a24fa36a5f9fcce7f0f866585ee451e3013232d105bf0da103825cf42c987756?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//                     className="img-3"
//                     alt="Full Name"
//                   />
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div className="div-17">Email</div>
//               <div className="div-18">
//                 <label htmlFor="email">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5de1fbdea27d7d4dfc7ced3eb22910cbda4fda0c7ef37966b06d763889cb188?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//                     className="img-4"
//                     alt="Email"
//                   />
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div className="div-20">Phone number</div>
//               <div className="div-21">
//                 <label htmlFor="phoneNumber">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f966a282de4b23ba4dbba25a9a6fd03c248b4f6d1116b219ccf7393103c1ff8?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//                     className="img-5"
//                     alt="Phone Number"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8367db8174543975af3e9df8e10c1f170b693b30184050fe32f76c92ebb28a?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//                     className="img-6"
//                     alt="Phone Number"
//                   />
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     placeholder="Enter your phone number"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div className="div-23">Password</div>
//               <div className="div-24">
//                 <label htmlFor="password">
//                   <div className="div-25">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfce1ef306069881af75d840a12e3e2fc4824cc460e3af71ac1f309769e691d6?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//                       className="img-7"
//                       alt="Password"
//                     />
//                     <input
//                       type={passwordVisibility ? 'text' : 'password'}
//                       id="password"
//                       name="password"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                 </label>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc2e7b098ebc31f2a9976584e041b3810d31d71bfed20416429b08a20bb560a?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//                   className="img-8"
//                   alt="Toggle Password Visibility"
//                   onClick={togglePasswordVisibility}
//                 />
//               </div>
//               <div className="div-27">Confirm password</div>
//               <div className="div-28">
//                 <label htmlFor="confirmPassword">
//                   <div className="div-29">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfce1ef306069881af75d840a12e3e2fc4824cc460e3af71ac1f309769e691d6?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//                       className="img-9"
//                       alt="Confirm Password"
//                     />
//                     <input
//                       type={confirmPasswordVisibility ? 'text' : 'password'}
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       placeholder="Confirm your password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                     />
//                   </div>
//                 </label>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc2e7b098ebc31f2a9976584e041b3810d31d71bfed20416429b08a20bb560a?apiKey=f034156a35d447a6a80ca3e586c86bf3&"
//                   className="img-10"
//                   alt="Toggle Confirm Password Visibility"
//                   onClick={toggleConfirmPasswordVisibility}
//                 />
//               </div>
//               <button type="submit" className="div-31">
//                 Submit
//               </button>
//             </form>
//             <div className="div-32">
//               Already have an account?{' '}
//               <span
//                 style={{
//                   fontWeight: 600,
//                   textDecoration: 'underline',
//                   color: 'rgba(47, 128, 237, 1)',
//                 }}
//               >
//                 Sign in here
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// const PlaceOrder = () => {
//     const cartId = useParams();
//     const [ order, setOrder] = useState([]);

//     useEffect(() => {
//         fetchQuiz();
//     }, []);

//     const fetchQuiz = async () => {
//         try {
//             const result = await axios.get(`http://localhost:8081/api/v1/orders/place-order/${cartId}/${userId}`);
//             setQuiz(result.data);
//         } catch (error) {
//            console.log("Error during fetching questions ", error);
//         }
//     };

//     console.log(quiz);
//   return (
//     <div>
//         <Link to={}
//     </div>
//   )
// }

// export default PlaceOrder
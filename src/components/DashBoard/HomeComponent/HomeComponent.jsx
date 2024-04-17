
import './HomeComponent.css'
import Navbar from '../Navbar/Navbar'
import HomeComponent1 from '../HomeComponent1/HomeComponent1'
import HomeComponent2 from '../HomeComponent2/HomeComponent2';
import { useState } from 'react';


const HomeComponent = () => {
  const [makingPayment, setMakingPayment] = useState(false);

    const handleMakePayment = () => {
        setMakingPayment(true);
    };

    return (
        <div className='home-container'>
            <Navbar />
            {makingPayment ? (
                <HomeComponent2 />
            ) : (
                <HomeComponent1 handleMakePayment={handleMakePayment} />
            )}
        </div>
    );
};

export default HomeComponent
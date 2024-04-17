import React, { useState } from 'react'
import './AdminSide.css'
import PropTypes from 'prop-types';
import sideLogo from '/src/assets/images/thai-hot-pot.png'
import sideHome from '/src/assets/vuesax-bulk-home-Q7m.png';
import sideHomeActive from '/src/assets/vuesax-bulk-home-rvf.png';
import sideTrack from '/src/assets/vuesax-bulk-gps-oL7.png'
import sideTrackActive from '/src/assets/vuesax-bulk-gps-uwq.png'
import sideOrders from '/src/assets/vuesax-bulk-clock.png'
import sideOrdersActive from '/src/assets/vuesax-bulk-clock-VNB.png'
import sideChat from '/src/assets/vuesax-bulk-messages-2-875.png'
import sideChatActive from '/src/assets/vuesax-bulk-messages-2-23u.png'
import sideSetting from '/src/assets/vuesax-bulk-setting-2-7RM.png'
import sideSettingActive from '/src/assets/vuesax-bulk-setting-2-16T.png'
import profileImage from '/src/assets/ellipse-4-bg-Vpo.png'
import signoutIcon from '/src/assets/signout.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminSide = ({handleComponentSelect, setIsLoggedOut}) => {
    const [selected, setSelected] = useState('home');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleButtonClick = (choice) =>{
        setSelected(choice);
        handleComponentSelect(choice);
    }

    const logout = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/api/v1/auth/logout');

            setIsLoggedOut(true);
            localStorage.removeItem("user");
            localStorage.removeItem("userRole");
            localStorage.removeItem("userId");
            localStorage.removeItem("userFullName");
            localStorage.clear();
            navigate('/');
        } catch (error) {
            console.error('Error during logout:', error.message);
            setLoading(false)
                error.response?.data?.message ||
                "An error occurred in the process. Please try again.";
        }
    };

    const handleAction = async (e) => {
        e.preventDefault();
        await logout(e);
    };

  return (
    <div className='sidebar-container'>
        <div className='side-upper'>
            <Link to={"/"}>
            <div className='side-logo'>
                <img src={sideLogo} alt="home" />
            </div>
            </Link>
            <hr className='side-line'/>
            <ul className='side-lower'>
                <li className={selected === 'home' ? 'side-lower-1-active' : 'side-lower-1'} id='side-1' onClick={() => handleButtonClick('home')}>
                    <img className='side-home' src={selected === 'home' ? sideHomeActive : sideHome} alt="home" />
                    <p className={selected === 'home' ? 'side-home-text-active' : 'side-home-text'}>Home</p>
                </li>
                <li className={selected === 'history' ? 'side-lower-1-active' : 'side-lower-1'}  id='side-2' onClick={() => handleButtonClick('history')}>
                    <img className='side-home' src={selected === 'track' ? sideTrackActive : sideTrack} alt="history" />
                    <p className={selected === 'history' ? 'side-home-text-active' : 'side-home-text'}>History</p>
                </li>
                <li className={selected === 'orders' ? 'side-lower-1-active' : 'side-lower-1'}  id='side-3' onClick={() => handleButtonClick('orders')}>
                    <img className='side-home' src={selected === 'orders' ? sideOrdersActive : sideOrders} alt="orders" />
                    <p className={selected === 'orders' ? 'side-home-text-active' : 'side-home-text'}>Orders</p>
                </li>
                <li className={selected === 'chat' ? 'side-lower-1-active' : 'side-lower-1'}  id='side-4' onClick={() => handleButtonClick('chat')}>
                    <img className='side-home' src={selected === 'chat' ? sideChatActive : sideChat} alt="chat" />
                    <p className={selected === 'chat' ? 'side-home-text-active' : 'side-home-text'}>Chat</p>
                </li>
                <li className={selected === 'settings' ? 'side-lower-1-active' : 'side-lower-1'}  id='side-6' onClick={() => handleButtonClick('settings')}>
                    <img className='side-home' src={selected === 'settings' ? sideSettingActive : sideSetting} alt="settings" />
                    <p className={selected === 'settings' ? 'side-home-text-active' : 'side-home-text'} id='settings-text'>Settings</p>
                </li>
            </ul>
            <hr className='side-line-2'/>
            <ul>
                <li className='side-lower-2' onClick={() => handleButtonClick('profile')}>
                    <img className='side-2-profile' src={profileImage} alt="profile image" />
                    <p className={selected === 'profile' ? 'side-home-text-active' : 'side-home-text'} id='profile-text'>Profile</p>
                </li>
                <li className='side-lower-2'>
                    <img className='side-signout' src={signoutIcon} alt="signout icon" onClick={(e) => handleAction(e)}/>
                </li>
            </ul>
        </div>
    </div>
  )
}

AdminSide.propTypes = {
    handleComponentSelect: PropTypes.func.isRequired,
    setIsLoggedOut: PropTypes.func.isRequired,
};


export default AdminSide
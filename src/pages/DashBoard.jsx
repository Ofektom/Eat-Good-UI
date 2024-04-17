import React, { useState } from 'react';
import Sidebar from '../components/DashBoard/Sidebar/Sidebar';
import HomeComponent from '../components/DashBoard/HomeComponent/HomeComponent';
import TrackComponent from '../components/DashBoard/TrackComponent/TrackComponent';
import OrdersComponent from '../components/DashBoard/OrdersComponent/OrdersComponent';
import ChatComponent from '../components/DashBoard/ChatComponent/ChatComponent';
import AlertComponent from '../components/DashBoard/AlertComponent/AlertComponent';
import SettingsComponent from '../components/DashBoard/SettingsComponent/SettingsComponent';
import ProfileComponent from '../components/DashBoard/ProfileComponent/ProfileComponent';

const DashBoard = () => {
  const [selectedComponent, setSelectedComponent] = useState('home');

    const handleComponentSelect = (componentName) => {
        setSelectedComponent(componentName);
    };
  return (
    <div className='product-dashboard'>
            <Sidebar handleComponentSelect={handleComponentSelect} />
            <div>
                {selectedComponent === 'home' && <HomeComponent />}
                {selectedComponent === 'track' && <TrackComponent />}
                {selectedComponent === 'orders' && <OrdersComponent />}
                {selectedComponent === 'chat' && <ChatComponent />}
                {selectedComponent === 'alert' && <AlertComponent />}
                {selectedComponent === 'settings' && <SettingsComponent />}
                {selectedComponent === 'profile' && <ProfileComponent />}
            </div>
          
        </div>
  )
}

export default DashBoard
import React, { useState } from 'react'
import AdminHome from '../components/AdminDashboard/AdminHome/AdminHome';
import AdminSide from '../components/AdminDashboard/AdminSide/AdminSide';
import AdminHistory from '../components/AdminDashboard/AdminHistory/AdminHistory';
import OrdersComponent from '../components/DashBoard/OrdersComponent/OrdersComponent';
import ChatComponent from '../components/DashBoard/ChatComponent/ChatComponent';
import SettingsComponent from '../components/DashBoard/SettingsComponent/SettingsComponent';
import ProfileComponent from '../components/DashBoard/ProfileComponent/ProfileComponent';

const AdminDashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState('home');

    const handleComponentSelect = (componentName) => {
        setSelectedComponent(componentName);
    };
  return (
    <div className='product-dashboard'>
            <AdminSide handleComponentSelect={handleComponentSelect} />
            <div>
                {selectedComponent === 'home' && <AdminHome />}
                {selectedComponent === 'history' && <AdminHistory />}
                {selectedComponent === 'orders' && <OrdersComponent />}
                {selectedComponent === 'chat' && <ChatComponent />}
                {selectedComponent === 'settings' && <SettingsComponent />}
                {selectedComponent === 'profile' && <ProfileComponent />}
            </div>
        </div>
  )
}

export default AdminDashboard
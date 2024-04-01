import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Auth = () => {
    return (
        <div className="container">
            <Header/>
            <div className='auth'>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>      
    );
}

export default Auth;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/footer/logo1.png'
import facebok from '../../../assets/footer/facebok.png'
import inc from '../../../assets/footer/in.png'
import ptichka from '../../../assets/footer/ptichka.png'
import youtube from '../../../assets/footer/youtube.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="con1">
                    <div className="footer__logo">
                        <Link to={'/'}>
                            <img src={logo} alt="" />
                        </Link>  
                    </div>
                    <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="mesenger">
                        <Link to=''>
                            <span>
                                <img src={facebok} alt="" />
                            </span>
                        </Link>
                        <Link to=''>
                            <span>
                                <img src={inc} alt="" />
                            </span>
                        </Link>
                        <Link to=''>
                            <span>
                                <img src={ptichka} alt="" />
                            </span>
                        </Link>
                        <Link to=''>
                            <span>
                                <img src={youtube} alt="" />
                            </span>
                        </Link>
                    </div>
                </div>
                <ul className="con2">
                    <div className="cont1">
                        <h1>COMPANY</h1>
                        <li><Link to={'/'}><a>HOME</a></Link></li>
                        <li><Link to={'/about'}><a>ABOUT US</a></Link></li>
                        <li><Link to={'/books'}><a>BOOKS</a></Link></li>
                        <li><Link to={'/newrelease'}><a>NEW RELEASE</a></Link></li>
                        <li><Link to={'/contacts'}><a>CONTACT US</a></Link></li>
                        <li><Link to={'/blog'}><a>BLOG</a></Link></li>
                    </div>
                    <div className="cont2">
                        <h1>IMPORTENT LINKS</h1>
                        <li><Link to={''}><a>Privacy Policy</a></Link></li>
                        <li><Link to={''}><a>FAQs</a></Link></li>
                        <li><Link to={''}><a>Terms of Service</a></Link></li>
                    </div>
                </ul>
                
            </div>
            <div className="con3">
                <p className="p1">© 2022 Arihant. All Rights Reserved.</p>
                <p className="p2">Privacy | Terms of Service</p>                                                                                    
            </div>
        </div>
    );
}

export default Footer;

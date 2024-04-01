import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import BurgerMenu from '../../../components/Layout/Header/BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import logo from '../../../assets/header/logo.png'


const Header = () => {
    const  data  = useSelector((state) => state.auth.user)
    return (
        <header>
            <HeaderTop />
            <div className='header'>
                <div className="header__logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="category">
                    <Link to={'/'}><li className={onclick === 'HOME' ? 'active' : ''}>HOME</li></Link>
                    <Link to={'/about'} className={onclick === 'ABOUT US' ? 'active' : ''}><li>ABOUT US</li></Link>
                    <Link to={'/books'} className={onclick === 'BOOKS' ? 'active' : ''}><li>BOOKS</li></Link>
                    <Link to={'/contacts'} className={onclick === 'CONTACT US' ? 'active' : ''}><li>CONTACT US</li></Link>
                </ul>
                <div className="authc">
                    {
                        data ? data.user :
                        <Link to={'auth/login'}>
                            <span>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.78125 9.5C8.875 9.5 8.46875 10 7 10C5.5 10 5.09375 9.5 4.1875 9.5C1.875 9.5 0 11.4062 0 13.7188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.7188C14 11.4062 12.0938 9.5 9.78125 9.5ZM12.5 14.5H1.5V13.7188C1.5 12.2188 2.6875 11 4.1875 11C4.65625 11 5.375 11.5 7 11.5C8.59375 11.5 9.3125 11 9.78125 11C11.2812 11 12.5 12.2188 12.5 13.7188V14.5ZM7 9C9.46875 9 11.5 7 11.5 4.5C11.5 2.03125 9.46875 0 7 0C4.5 0 2.5 2.03125 2.5 4.5C2.5 7 4.5 9 7 9ZM7 1.5C8.625 1.5 10 2.875 10 4.5C10 6.15625 8.625 7.5 7 7.5C5.34375 7.5 4 6.15625 4 4.5C4 2.875 5.34375 1.5 7 1.5Z" fill="#444444" />
                                </svg>
                            </span> &nbsp;Войти
                        </Link>
                    }
                    <Link to="/favorites">
                        <span>
                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00036 0C6.01455 0 4.38454 1.64715 4.38454 3.65385V4.38462H0.813559L0.768723 5.07008L0.0455595 18.2239L0 19H16L15.9552 18.2232L15.232 5.06935L15.1864 4.38462H11.6162V3.65385C11.6162 1.64715 9.98617 0 8.00036 0ZM8.00036 1.46154C8.57575 1.46154 9.12757 1.69251 9.53442 2.10365C9.94128 2.51479 10.1699 3.07241 10.1699 3.65385V4.38462H5.83087V3.65385C5.83087 3.07241 6.05944 2.51479 6.4663 2.10365C6.87316 1.69251 7.42498 1.46154 8.00036 1.46154ZM2.16949 5.84615H4.38454V8.03846H5.83087V5.84615H10.1699V8.03846H11.6162V5.84615H13.8312L14.464 17.5385H1.53745L2.16949 5.84615Z" fill="#393280" />
                            </svg>
                        </span> &nbsp;Корзина
                    </Link>
                    <Link to="/laik">
                        <span>
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.33857 10.711C-0.041108 7.61463 0.752117 2.97011 4.71824 1.42194C8.68437 -0.126229 11.064 2.97011 11.8573 4.51829C12.6505 2.97011 15.8234 -0.126229 19.7895 1.42194C23.7556 2.97011 23.7556 7.61463 21.376 10.711C18.9963 13.8073 11.8573 20 11.8573 20C11.8573 20 4.71824 13.8073 2.33857 10.711Z" stroke="#393280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span> &nbsp;Избранное
                    </Link>
                </div>
                <BurgerMenu/>
            </div>
        </header>
    );
}

export default Header;

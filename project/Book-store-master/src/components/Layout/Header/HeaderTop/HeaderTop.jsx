import React from 'react';
import { Link } from 'react-router-dom';
import contac from '../../../../assets/header/contac.png'
import facebook from '../../../../assets/header/facebook.png'
import instagram from '../../../../assets/header/instagram.png'
import ins from '../../../../assets/header/in.png'
import ptichka from '../../../../assets/header/ptichka.png'
import b from '../../../../assets/header/b.png'

const HeaderTop = () => {
    return (
        <div className="header__top">
            <div className="contacts">
                <img src={contac} alt=""/>
                <a href="tel:996770777707">+996770777707</a>
            </div>
            <div className="mesenger">
                <Link to=''>
                    <span>
                        <img src={facebook} alt="" />
                    </span>
                </Link>
                <Link to=''>
                    <span>
                        <img src={instagram} alt="" />
                    </span>
                </Link>
                <Link to=''>
                    <span>
                        <img src={ins} alt="" />
                    </span>
                </Link>
                <Link to=''>
                    <span>
                        <img src={ptichka}alt="" />
                    </span>
                </Link>
                <Link to=''>
                    <span>
                        <img src={b} alt="" />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default HeaderTop;

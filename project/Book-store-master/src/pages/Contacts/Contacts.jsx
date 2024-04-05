import React from 'react';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="container">
                <h1>Контакты</h1>
                <div className="can">
                    <p className='pq'>Адреса и телефоны книга магазина:</p>
                    <div className="contact__buttons">
                        <div className="contact__buttons1">
                            <p>Кыргызстан.  Город.Ош</p>
                            <a href="tel:996770777707">+996770777707</a>
                        </div>
                        <div className="contact__buttons1">
                            <p>Кыргызстан.  Город.Ош</p>
                            <a href="tel:996770777707">+996770777707</a>
                        </div>
                    </div>
                    <p className='po'>Время работы: с 10:00 до 22:00</p>
                    <p className='pa'>E-mail: <a>nurelnasirov8@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;

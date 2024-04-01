import React from 'react';
import Slider from 'react-slick';

const Carouselaksi = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className="slide">
            <div className="aksi">
                <div className="cont1">
                    <div className="text">
                        <h1>All books are 50% off now! Don't miss such a deal!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    </div>
                    <div className="days">
                        <div className="con">
                            <h1 className="san">768</h1>
                            <p className="tam">DAYS</p>
                        </div>
                        <div className="con">
                            <h1 className="san">01</h1>
                            <p className="tam">HOUR</p>
                        </div>
                        <div className="con">
                            <h1 className="san">27</h1>
                            <p className="tam">MINT</p>
                        </div>
                        <div className="con">
                            <h1 className="san">55</h1>
                            <h1 className="tam">SEC</h1>
                        </div>
                    </div>
                </div>
                <div className="cont2">
                    <img src="src/assets/Unsplash.png" alt="" />
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="aksi">
                <div className="cont1">
                    <div className="text">
                        <h1>All books are 50% off now! Don't miss such a deal!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    </div>
                    <div className="days">
                        <div className="con">
                            <h1 className="san">768</h1>
                            <p className="tam">DAYS</p>
                        </div>
                        <div className="con">
                            <h1 className="san">01</h1>
                            <p className="tam">HOUR</p>
                        </div>
                        <div className="con">
                            <h1 className="san">27</h1>
                            <p className="tam">MINT</p>
                        </div>
                        <div className="con">
                            <h1 className="san">55</h1>
                            <h1 className="tam">SEC</h1>
                        </div>
                    </div>
                </div>
                <div className="cont2">
                    <img src="src/assets/Unsplash.png" alt="" />
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="aksi">
                <div className="cont1">
                    <div className="text">
                        <h1>All books are 50% off now! Don't miss such a deal!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    </div>
                    <div className="days">
                        <div className="con">
                            <h1 className="san">768</h1>
                            <p className="tam">DAYS</p>
                        </div>
                        <div className="con">
                            <h1 className="san">01</h1>
                            <p className="tam">HOUR</p>
                        </div>
                        <div className="con">
                            <h1 className="san">27</h1>
                            <p className="tam">MINT</p>
                        </div>
                        <div className="con">
                            <h1 className="san">55</h1>
                            <h1 className="tam">SEC</h1>
                        </div>
                    </div>
                </div>
                <div className="cont2">
                    <img src="src/assets/Unsplash.png" alt="" />
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="aksi">
                <div className="cont1">
                    <div className="text">
                        <h1>All books are 50% off now! Don't miss such a deal!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    </div>
                    <div className="days">
                        <div className="con">
                            <h1 className="san">768</h1>
                            <p className="tam">DAYS</p>
                        </div>
                        <div className="con">
                            <h1 className="san">01</h1>
                            <p className="tam">HOUR</p>
                        </div>
                        <div className="con">
                            <h1 className="san">27</h1>
                            <p className="tam">MINT</p>
                        </div>
                        <div className="con">
                            <h1 className="san">55</h1>
                            <h1 className="tam">SEC</h1>
                        </div>
                    </div>
                </div>
                <div className="cont2">
                    <img src="src/assets/Unsplash.png" alt="" />
                </div>
            </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    );
  };
  
  export default Carouselaksi;
import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
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
            <div className="slaid">
                <div className="cont1">
                    <div className="text">
                        <div className="teks">
                            <h1>ipsum dolor si</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
                        </div>
                        <button>READ MORE <img src="src/assets/Vector.png" alt="" /></button>
                    </div>
                </div>
                <div className="cont2">
                    <img src="src/assets/bok slider.png" alt="" />
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="slaid">
                <div className="cont1">
                    <div className="text">
                        <div className="teks">
                            <h1>ipsum dolor si</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
                        </div>
                        <button>READ MORE <img src="src/assets/Vector.png" alt="" /></button>
                    </div>
                </div>
                <div className="cont2">
                    <img src="src/assets/bok slider.png" alt="" />
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="slaid">
                <div className="cont1">
                    <div className="text">
                        <div className="teks">
                            <h1>ipsum dolor si</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
                        </div>
                        <button>READ MORE <img src="src/assets/Vector.png" alt="" /></button>
                    </div>
                </div>
                <div className="cont2">
                    <img src="src/assets/bok slider.png" alt="" />
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="slaid">
                <div className="cont1">
                    <div className="text">
                        <div className="teks">
                            <h1>ipsum dolor si</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
                        </div>
                        <button>READ MORE <img src="src/assets/Vector.png" alt="" /></button>
                    </div>
                </div>
                <div className="cont2">
                    <img src="src/assets/bok slider.png" alt="" />
                </div>
            </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    );
  };
  
  export default Carousel;
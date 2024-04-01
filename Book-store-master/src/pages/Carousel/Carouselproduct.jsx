import React from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/cardsSlice';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/favoriteSlice'; 


const Carouselproduct = () => {
  const { id } = useParams()
  const { data } = useGetProductQuery(id)
  console.log(data);
  const dispatch = useDispatch();
  const handleAddToFavorites = () => {
      dispatch(addToFavorites(
         { id: data.id,
          image: data.image,
          price: data.price,
          title: data.title,
          name: data.name}
      ));
  };
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
          <div className="products">
                <div className="product__left"><img src="src/assets/books/book3.png" alt="" /></div>
                <div className="product__rigth">
                    <h1>Featured book</h1>
                    <p className="name">Arthur Doyle</p>
                    <h2>The lady beauty Scarlett</h2>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <p className="price">$ 45.00</p>
                    <button onClick={handleAddToFavorites} >В корзину <img src="src/assets/Vector.png" alt="" /></button>
                </div>
          </div>
      </div>
      <div className="slide">
          <div className="products">
                <div className="product__left"><img src="src/assets/books/book2.png" alt="" /></div>
                <div className="product__rigth">
                    <h1>Featured book</h1>
                    <p className="name">Sanchit Howdy</p>
                    <h2>Great travel at desert</h2>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <p className="price">$ 38.00</p>
                    <button onClick={handleAddToFavorites} >В корзину <img src="src/assets/Vector.png" alt="" /></button>
                </div>
          </div>
      </div>
      <div className="slide">
          <div className="products">
                <div className="product__left"><img src="src/assets/books/book1.png" alt="" /></div>
                <div className="product__rigth">
                    <h1>Featured book</h1>
                    <p className="name">Armor Ramsey</p>
                    <h2>Simple way of piece life</h2>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <p className="price">$ 40.00</p>
                    <button onClick={handleAddToFavorites} >В корзину <img src="src/assets/Vector.png" alt="" /></button>
                </div>
          </div>
      </div>
      <div className="slide">
          <div className="products">
                <div className="product__left"><img src="src/assets/books/book4.png" alt="" /></div>
                <div className="product__rigth">
                    <h1>Featured book</h1>
                    <p className="name">Klien Marry</p>
                    <h2>Once upon a time</h2>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <p className="price">$ 35.00</p>
                    <button onClick={handleAddToFavorites} >В корзину <img src="src/assets/Vector.png" alt="" /></button>
                </div>
          </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carouselproduct;
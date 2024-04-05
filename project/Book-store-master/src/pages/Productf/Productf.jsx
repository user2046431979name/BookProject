import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/cardsSlice';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/favoriteSlice';
import { addToLaik } from '../../store/laik';
import laik from '../../assets/header/laik.png'

const Productf = () => {
        const { id } = useParams()
        const { data } = useGetProductQuery(id)
        console.log(data);
        const dispatch = useDispatch();
        const handleAddToFavorites = () => {
            dispatch(addToFavorites(
            {   id: data.id,
                image: data.image,
                price: data.price,
                title: data.title,
                name: data.name}
            ));
        };
    const handleAddToLaik = () => {
        dispatch(addToLaik(
           { id: data.id,
            image: data.image,
            price: data.price,
            title: data.title,
            name: data.name}
        ));
    };
    return (
        <div>
            <div className="productf">
                <div className="product__left"><img src={data?.image} alt="" /></div>
                <div className="product__rigth">
                    <h1>Featured book</h1>
                    <p className="name">{data?.name}</p>
                    <h2>{data?.title}</h2>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <p className="price">{data?.price}</p>
                    <div className="buttons">
                        <button onClick={handleAddToFavorites} className="delivery" data-id="1627">В корзину</button>
                        <button onClick={handleAddToLaik} className="img" data-id="1627"><img src={laik} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productf;

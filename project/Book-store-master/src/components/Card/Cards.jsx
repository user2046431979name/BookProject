import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/favoriteSlice';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    const dispatch = useDispatch();

    dispatch(addToFavorites(
        { id: props.id,
        image: props.image,
        price: props.price,
        title: props.title,
        name: props.name}
    ));

    return (
        <div className="card">   
            <Link to={`/${props.id}`}>
                <div className="img"><img src={props.image} alt="" /></div>
                <p className="title">{props.title}</p>
                <p className="name">{props.name}</p>
                <p className="price">{props.price}</p>
            </Link>
        </div>
    );
}

export default Cards;
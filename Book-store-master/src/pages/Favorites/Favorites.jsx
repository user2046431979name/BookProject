import React from 'react';
import { removeFromFavorites } from '../../store/favoriteSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useSubmitFavoritesMutation } from '../../store/favoritesApi';

const Favorites = () => {
    const [submitFavorites, { isLoading, isError }] = useSubmitFavoritesMutation();
    const favorites = useSelector((state) => state.favorites.favorites);
    const user = useSelector((state) => state.auth.user?.id); // Updated user selector with optional chaining

    const dispatch = useDispatch();

    const handleFavoritesSubmit = () => {
        if (user) {
            submitFavorites({ favorites, userId: user });
            console.log({ favorites, userId: user });
        }
    };

    const handleRemoveFromFavorites = (id) => {
        dispatch(removeFromFavorites(id));
    };

    return (
        <div className='favorites'>
            <div className="container">
                <h2>Корзина</h2>
                {favorites.map((favorite, index) => (
                    <div key={index} className="cfavorites">
                        <div className="img">
                            <img src={favorite.image} alt="" />
                        </div>
                        <div className="con">
                            <div className='ctitle'>
                                <h1 className='title'>{favorite.title}</h1>
                                <p className='price'>Цена: {favorite.price}</p>
                            </div>
                            <div className="x">
                                <button onClick={() => handleRemoveFromFavorites(favorite.id)}>
                                    <img src="./src/assets/cart/x.jpg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="buttons">
                    <div className="btn">
                        <button onClick={handleFavoritesSubmit} disabled={isLoading} className='button'>
                            {isLoading ? 'Оформляется...' : 'Оформить заказ'}
                        </button>
                        {isError && <div>Ошибка при отправке заказа</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorites;

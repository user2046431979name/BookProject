import React from 'react';
import { removeFromLaik } from '../../store/laik';
import { useSelector, useDispatch } from 'react-redux';
import { useSubmitLaikMutation } from '../../store/laikApi';


const Laik = () => {
    const [submitlaik, { isLoading, isError }] = useSubmitLaikMutation();
    const laik = useSelector((state) => state.laik);
    const user = useSelector((state) => state.auth.user);
    console.log(laik);
    console.log(user);
    const dispatch = useDispatch()
    const handleRemoveFromLaik = (id) => {
        // Диспатчим действие removeFromFavorites с идентификатором элемента для удаления
        dispatch(removeFromLaik(id));
    }
    return (
        <div className='favorites'>
            <div className="container">
                <h2>Избранное</h2>
                {laik?.map((laik, index) => (
                    <div key={index} className="cfavorites">
                        <div className="img">
                            <img src={laik.image} alt="" />
                        </div>
                        <div className="con">
                            <div className='ctitle'>
                                <h1 className='title'>{laik.title}</h1>
                                <p className='price'>Цена: {laik.price}</p>
                            </div>
                            <div className="x">
                                <button onClick={() => handleRemoveFromLaik(laik.id)}><img src="./src/assets/cart/x.jpg" alt="" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Laik;
import React from 'react';
import Cards from '../../components/Card/Cards';
import { useGetAllCardsQuery} from '../../store/cardsSlice';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from '../../pages/Carousel/Carousel';
import Carouselproduct from '../../pages/Carousel/Carouselproduct';
import Carouselaksi from '../../pages/Carousel/Carouselaksi';

const Home = () => {
    const {category} = useSelector((state)=> state.category)
    console.log(category);
    const {data=[] , isLoading } = useGetAllCardsQuery({category});
    console.log(data);
    if (isLoading) {
        return <h2>loading...</h2>
    }
    return (
        <div className="home">
            <Carousel />
            <div className="categories">
                <div className="cont1">
                    <div className="text">
                        <p>--Categories</p>
                        <h1>Explore our Top Categories</h1>
                    </div>
                    <div className="slider"></div>
                </div>
                <div className="cont2">
                    <div className="con">
                        <img src="src/assets/categories/Rectangle 11.png" alt="" />
                        <h2>Higher Education</h2>
                    </div>
                    <div className="con">
                        <img src="src/assets/categories/Rectangle 11 (1).png" alt="" />
                        <h2>Management Books</h2>
                    </div>
                    <div className="con">
                        <img src="src/assets/categories/Rectangle 11 (2).png" alt="" />
                        <h2>Engineering Books</h2>
                    </div>
                    
                </div>
                <button className="btn">VIEW MORE <img src="src/assets/Vector.png" alt="" /></button>
            </div>
            <div className="release">
                <p className="p">SOME QUALITY ITEMS</p>
                <h1>New Release Books</h1>
                <div className="cards">
                    {
                        data?.map((item) => (
                            <Cards
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            name={item.name}
                            />
                        ))
                    }
                </div>
                <div className="slaid">
                    <Link to={'/Books'}>
                        <button className="btn">View all products <img src="src/assets/Vector.png" alt="" /></button>
                    </Link>
                </div>
            </div>
            <Carouselproduct/>
            <Carouselaksi />
            <div className="gmail">
                <div className="con1">
                    <div className="text">
                        <h1>Subscibe to Our Newsletter</h1>
                        <p>Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
                    </div>
                    <div className="input">
                        <img src="src/assets/email icon.png" alt="" />
                        <p className="p">youremail123@gmail.com</p>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                
            </div>
            <div className="articles">
                <p className="p">READ OUR ARTICLES</p>
                <h1>Latest Articles</h1>
                <div className="cards">
                    <div className="card">
                        <img src="./src/assets/articles/1.png" alt="" />
                        <p>2 aug, 2021</p>
                        <h1>Reading books always makes the moments happy</h1>
                        <div className="mesenger">
                            <img src="./src/assets/articles/4.png" alt="" />
                            <img src="./src/assets/articles/5.png" alt="" />
                            <img src="./src/assets/articles/6.png" alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <img src="./src/assets/articles/2.png" alt="" />
                        <p>2 aug, 2021</p>
                        <h1>Reading books always makes the moments happy</h1>
                        <div className="mesenger">
                            <img src="./src/assets/articles/4.png" alt="" />
                            <img src="./src/assets/articles/5.png" alt="" />
                            <img src="./src/assets/articles/6.png" alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <img src="./src/assets/articles/3.png" alt="" />
                        <p>2 aug, 2021</p>
                        <h1>Reading books always makes the moments happy</h1>
                        <div className="mesenger">
                            <img src="./src/assets/articles/4.png" alt="" />
                            <img src="./src/assets/articles/5.png" alt="" />
                            <img src="./src/assets/articles/6.png" alt="" />
                        </div>
                    </div>
                </div>
                <button>READ ALL ARTICLES <img src="src/assets/Vector.png" alt="" /></button>
            </div>
        </div>
    );
}

export default Home;

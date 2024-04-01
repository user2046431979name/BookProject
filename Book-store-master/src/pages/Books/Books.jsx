import React, { useState } from 'react';
import Book from '../../components/Card/Book';
import { useGetAllBookQuery } from '../../store/bookSlice';
import { useSelector } from 'react-redux';
import Pagination from '../../components/Pagination';

const Books = () => {
    const { category } = useSelector((state) => state.category);
    const { data = [], isLoading } = useGetAllBookQuery({ category });
    const itemsPerPage = 12; // Set the number of items per page
    const [currentPage, setCurrentPage] = useState(1); // State for current page

    console.log(category);
    console.log(data);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isLoading) {
        return <h2>loading...</h2>;
    }
    return (
        <div className="Books">
            <div className="filtery">
                <div className="price">
                    <div className="head">
                        <p>price</p>
                        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L17 1" stroke="#393280" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="input">
                        <div className="input1">
                            <p>$</p>
                            <input type="text"/>
                        </div>
                        <h1>to</h1>
                        <div className="input1">
                            <p>$</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <button>Filter</button>
                </div>
                <div className="category">
                    <h1>Product type</h1>
                    <h1>+</h1>
                </div>
                <div className="category">
                    <h1>Availability</h1>
                    <h1>+</h1>
                </div>
                <div className="category">
                    <h1>Brand</h1>
                    <h1>+</h1>
                </div>
                <div className="category">
                    <h1>Color</h1>
                    <h1>+</h1>
                </div>
                <div className="categor">
                    <h1>Material</h1>
                    <h1>+</h1>
                </div>
            </div>
            <div className="products">
                <div className="sort">
                    <div className="cont">
                        <h1>Sort by : Alphabetically, A-Z</h1>
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14286 -5.62004e-07L7.5 5L12.8571 -9.36673e-08L15 1L7.5 8L-4.37114e-08 0.999999L2.14286 -5.62004e-07Z" fill="#393280" fill-opacity="0.6" />
                        </svg>
                    </div>
                    <div className="cont2">
                        <h1>Showing 1 - 12 of 26 result</h1>
                    </div>
                    <div className="cont">
                        <h1>Show : 12</h1>
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14286 -5.62004e-07L7.5 5L12.8571 -9.36673e-08L15 1L7.5 8L-4.37114e-08 0.999999L2.14286 -5.62004e-07Z" fill="#393280" fill-opacity="0.6" />
                        </svg>
                    </div>
                </div>
                <div className="books">
                {currentItems.map((item) => (
                    <Book
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        title={item.title}
                        name={item.name}
                        page={item.page}
                    />
                ))}
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            </div>
        </div>
    );
}

export default Books;

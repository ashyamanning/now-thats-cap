import React from 'react';
import categoryData from './Data/categoryData';
import { Link } from 'react-router-dom';
import './Css/categories.css'

const Categories = () => {
    return (
        <div className="categoriesMain">
            <ul className="categoriesUL">
                {categoryData.map((item, index) => (
                    <li className="categoriesLI">
                        <button className="catBtn">
                            <Link className="catLink" type="button" to={item.link} key={index}>
                                {item.title}
                            </Link>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories

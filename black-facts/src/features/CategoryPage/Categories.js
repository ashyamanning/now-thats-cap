import React, { useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addCategory } from './CategoryStateFolder/categorySlice.js';
import categoryData from '../../data/categoryData';
import styled, { css } from 'styled-components/macro';
import { Link, useHistory } from 'react-router-dom';
// import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack} from 'react-icons/io5';
import './Css/categories.css'


// const arrowButtons = css `
//     width: 50px;
//     height: 50px;
//     color: #fff;
//     cursor: pointer;
//     background: #000d1a;
//     border-radius: 50px;
//     padding: 10px;
//     margin-right : 1rem;
//     user-select: none;
//     transition: 0.4s;

//     &:hover {
//         background: #cd853f;
//         transform: scale(1.05)
//     }
// `;

// const PrevArrow = styled(IoArrowBack)`
//     ${arrowButtons}
// `;

// const NextArrow = styled(IoArrowForward)`
//     ${arrowButtons}
// `;

const Categories = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        debugger
        dispatch(addCategory(e.currentTarget.value))
        debugger
        history.push('/play')
    }


    // const [current, setCurrent] = useState(0);
    // const length = slides;
    // const timeout = useRef(null);

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1));
    //     }
    //     timeout.current = setTimeout(nextSlide, 4000);

    //     return function() {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [current, length])


    // const nextSlide = () => {
    //     if(timeout.current) {
    //         clearTimeout(timeout.current)
    //     }
    //     setCurrent(current === length - 1 ? 0 : current + 1);
    // }

    // const prevSlide = () => {
    //     if(timeout.current) {
    //         clearTimeout(timeout.current)
    //     }
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    // if(!Array.isArray(slides) || slides.length <= 0) {
    //     return null 
    // }
    return (
        <div className="categoriesMain">
            <section className="categories-main-sect"> 
                <div> 
                    <ul className="categoriesUL">
                        {categoryData.map((item, index) => (
                            <li key={item.id} className="categoriesLI">
                                <button className="catBtn" value={item.title} onClick={handleClick}>
                                    <Link className="catLink" type="button" to={item.link} key={item.id}>
                                        {item.title}
                                    </Link>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="building-progress-bar">
                    <div>
                        <div> 
                        </div>
                    </div>
                    <ul> 
                        <li style={{marginTop:'3%'}} className="building-li"> 
                            <button className="building-button"> 
                                <div>
                                    <div> 
                                        <picture> 
                                            <source/>
                                        </picture>
                                        <img/>
                                    </div> 
                                </div>
                            </button>
                        </li>

                        <li className="building-li"> 
                            <button className="building-button"> 
                                <div>
                                    <div> 
                                        <picture> 
                                            <source/>
                                        </picture>
                                        <img/>
                                    </div> 
                                </div>
                            </button>
                        </li>

                        <li className="building-li"> 
                            <button className="building-button"> 
                                <div>
                                    <div> 
                                        <picture> 
                                            <source/>
                                        </picture>
                                        <img/>
                                    </div> 
                                </div>
                            </button>
                        </li>

                        <li className="building-li"> 
                            <button className="building-button"> 
                                <div>
                                    <div> 
                                        <picture> 
                                            <source/>
                                        </picture>
                                        <img/>
                                    </div> 
                                </div>
                            </button>
                        </li>

                        <li className="building-li"> 
                            <button className="building-button"> 
                                <div>
                                    <div> 
                                        <picture> 
                                            <source/>
                                        </picture>
                                        <img/>
                                    </div> 
                                </div>
                            </button>
                        </li>

                        <li className="building-li"> 
                            <button className="building-button"> 
                                <div>
                                    <div> 
                                        <picture> 
                                            <source/>
                                        </picture>
                                        <img/>
                                    </div> 
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Categories

import React, { useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addCategory } from './CategoryStateFolder/categorySlice.js';
import categoryData from '../../data/categoryData';
import styled, { css } from 'styled-components/macro';
import { Link, useHistory } from 'react-router-dom';
import './Css/categories.css';
import Swiper, { SwiperSlide } from 'swiper';
import 'swiper/swiper-bundle.css';
import RandomizeBtn from './RandomizeBtn';


const Categories = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [mySwiper, setMySwiper] = useState(null) 


    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            // coverflowEffect: {
            //     rotate: 50,
            //     stretch: 0,
            //     depth: 100,
            //     modifier: 1,
            //     slideShadows: true,
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        });
        setMySwiper(mySwiper) 
    }, [])


    const handleClick = (e) => {
        debugger
        dispatch(addCategory(e.currentTarget.value))
        debugger
        history.push('/play')
    }


    return (
        <div className="categoriesMain">

    
            <section class="swiper-container"> 
                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    > */}

                    <div class="swiper-wrapper">   
                        {categoryData.map((item, index) => (
                            <div class="swiper-slide" key={item.id}>
                                <div className="catBtn" value={item.title}>
                                    <div className="select-btns-div">
                                        <h1 className="cat-title" type="button" key={item.id}>
                                            {item.title}
                                        </h1>
                                        <div className="select-btn-div">
                                            <button className="select-btns" type="button" onClick={handleClick} key={item.id} value={item.title}> 
                                                <h3 className="style-btn"> Select Category </h3>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-pagination"></div>
    
                            </div>   
                        ))}
                    </div>

                {/* </Swiper> */}


                <div className="catHomeRandBtn">
                    {/* <div class="swiper-button-prev"></div> */}
                    <RandomizeBtn/>
                    {/* <div class="swiper-button-next"></div> */}
                </div>
            </section>
        </div>
    )
}

export default Categories


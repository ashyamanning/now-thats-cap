import React, { useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addCategory } from './CategoryStateFolder/categorySlice.js';
import categoryData from '../../data/categoryData';
import styled, { css } from 'styled-components/macro';
import { Link, useHistory } from 'react-router-dom';
// import { IoMdArrowRoundForward } from 'react-icons/io';
// import { IoArrowForward, IoArrowBack} from 'react-icons/io5';
import './Css/categories.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Background } from '../'


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

const sectionStyle = {
  width: "100%",
  height: "400px",
//   backgroundImage: "url(" + { Background } + ")"
};

const Categories = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        debugger
        dispatch(addCategory(e.currentTarget.value))
        debugger
        history.push('/play')
    }

//     <script>
//     var swiper = new Swiper('.swiper-container', {
//       effect: 'coverflow',
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       },
//      loop: true,
//       autoplay:{
//        delay: 500,
//         disableInteration: false;
//        },
//       pagination: {
//         el: '.swiper-pagination',
//       },
//     });
//   </script>


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

        {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >    */}
    
            <section class="swiper-container" /*className="categories-main-sect"*/> 
                <div class="swiper-wrapper">   
                    {categoryData.map((item, index) => (
                        <div class="swiper-slide">
                            <button className="catBtn" value={item.title} onClick={handleClick}>
                                <Link className="catLink" type="button" to={item.link} key={item.id}>
                                    {item.title}
                                </Link>
                            </button>
 
                        </div>   
                    ))}
                </div>

            </section>
        </div>
    )
}

export default Categories


// <button /*className="catBtn"*/ value={item.title} onClick={handleClick}>
//                                 <Link /*className="catLink"*/ type="button" to={item.link} key={item.id}>
//                                     {item.title}
//                                 </Link>
//                             </button>

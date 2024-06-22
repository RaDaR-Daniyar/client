import r1 from "../assets/rightLeftSlider/r1.jpg";
import r2 from "../assets/rightLeftSlider/r2.jpg";
import r3 from "../assets/rightLeftSlider/r3.jpg";
import r4 from "../assets/rightLeftSlider/r4.jpg";
import r5 from "../assets/rightLeftSlider/r5.jpg";
import r6 from "../assets/rightLeftSlider/r6.jpg";
import r7 from "../assets/rightLeftSlider/r7.jpg";
import r8 from "../assets/rightLeftSlider/r8.jpg";
import r9 from "../assets/rightLeftSlider/r9.jpg";
import r10 from "../assets/rightLeftSlider/r10.jpg";
import r11 from "../assets/rightLeftSlider/r11.jpg";
import r12 from "../assets/rightLeftSlider/r12.jpg";
import r13 from "../assets/rightLeftSlider/r13.jpg";
import l1 from "../assets/rightLeftSlider/l1.jpg";
import l2 from "../assets/rightLeftSlider/l2.jpg";
import l3 from "../assets/rightLeftSlider/l3.jpg";
import l4 from "../assets/rightLeftSlider/l4.jpg";
import l5 from "../assets/rightLeftSlider/l5.jpg";
import l6 from "../assets/rightLeftSlider/l6.jpg";
import l7 from "../assets/rightLeftSlider/l7.jpg";
import l8 from "../assets/rightLeftSlider/l8.jpg";
import l9 from "../assets/rightLeftSlider/l9.jpg";
import l10 from "../assets/rightLeftSlider/l10.jpg";
import l11 from "../assets/rightLeftSlider/l11.jpg";
import l12 from "../assets/rightLeftSlider/l12.jpg";
import l13 from "../assets/rightLeftSlider/l13.jpg";
import men from "../assets/rightLeftSlider/men.jpg";
import women from "../assets/rightLeftSlider/women.jpg";
import './style.css'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import { Card, } from "react-bootstrap";
import { NavLink } from "react-router-dom";

var Aside = () => {
    const nextL = useRef();
    const nextR = useRef();
    const prevL = useRef();
    const prevR = useRef();
    const { 0: width, 1: setWidth} = useState(window.innerWidth)
    const { 0: photosLeft, 1: setLPhotos } = useState([
        [l1, '/product/2234'],
        [l2, '/product/2318'],
        [l3, '/product/232'],
        [l4, '/product/94'],
        [l5, '/product/783'],
        [l6, '/product/186'],
        [l7, '/product/2143'],
        [l8, '/product/2401'],
        [l9, '/product/2121'],
        [l10, '/product/2328'],
        [l11, '/product/2463'],
        [l12, '/product/2281'],
        [l13, '/product/239']
    ])
    const { 0: photosRight, 1: setRPhotos } = useState([
        [r1, '/product/834'],
        [r2, '/product/530'],
        [r3, '/product/2496'],
        [r4, '/product/85'],
        [r5, '/product/2730'],
        [r6, '/product/2370'],
        [r7, '/product/2221'],
        [r8, '/product/2627'],
        [r9, '/product/1127'],
        [r10, '/product/553'],
        [r11, '/product/2502'],
        [r12, '/product/2376'],
        [r13, '/product/2269']
    ])
    SwiperCore.use([Autoplay, Navigation, Pagination]);

    // resize
    const resizeHandler = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
          window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    // remove all if width < 1830
    if (width < 1830) {
        return (<></>)
    }

    // styles for arrows
    var style = {
        position: "absolute",
        width: "100%",
        padding: '8px 0',
        zIndex: 100,
        left: 0,
        right: 0,
        border: 'none',
        backgroundColor: '#fff',
    }
    // for old arrows
    var oldAr =
     `
        .leftright-slider .swiper-button-prev,
        .leftright-slider .swiper-button-next{
            display: none;
        }
        .leftright-slider .swiper-button-disabled{
            opacity: .3;
        }
    `

    return (
        //             //
        // LEFT SLIDER //
        //             //
        <>
            <style>
                {oldAr}
            </style>
            <div className="leftright-slider" style={{
                position: "fixed",
                top: "10px",
                bottom: "10px",
                left: "10px",
            }}>
                <div class="hover-image-scale" style={{position: 'relative', zIndex: '100', boxShadow: '0 0 20px rgb(18, 0, 186)'}}>
                    <a href='/shop?gender=3'><img class="scalecategories"  src = { men } alt = "Мужские часы" style={{width: '255px'}} /></a>
                    <span style={{position: 'absolute', bottom: 1, right: 1, fontWeight: 'bold', color: '#fff', fontSize: '18px', fontFamily: 'Georgia'}}>МУЖСКИЕ ЧАСЫ</span>
                </div>

                <Swiper
                    direction='vertical'
                    effect='slide'
                    slidesPerView={6.05}
                    spaceBetween={120}
                    modules={[Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                        loop={true}
                        navigation={{
                        prevEL: prevL.current,
                        nextEl: nextL.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevL.current;
                        swiper.params.navigation.nextEl = nextL.current;
                    }}
                    onInit ={ (swiper) => {
                        swiper.el.addEventListener('mouseenter', () => {
                            swiper.autoplay.stop();
                          });

                          swiper.el.addEventListener('mouseleave', () => {
                            swiper.autoplay.start();
                          });
                        }
                    }
                    style={{width: "100%",
                        maxWidth: "940px",
                        height: "81%",
                        margin: "0 auto",
                        position: "relative",
                        padding: "0px 0 0px",
                        boxShadow: '0 0 20px rgb(18, 0, 186)'
                    }}

                >
                    <button ref={prevL} style={Object.assign({...style}, {top: 0})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ transform: 'rotate(-90deg)', fill: '#1200ba', width: '20px'}}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </button>
                        {photosLeft?.map((data, ind) => {
                        return (
                            <div style={{height: '100%'}}>
                                <SwiperSlide key={ind}>
                                    <Card
                                    style={{
                                        width: 255,
                                        objectFit: "contain",
                                        border: "none",
                                        paddingLeft: "5px",
                                    }}
                                    >
                                        {data[0] ? (
                                            <NavLink to={data[1]} class="image-scale">
                                                <Card.Img
                                                    className="mt-1"
                                                    style={{
                                                        width: 245,
                                                        objectFit: "contain",
                                                        margin: "0 auto"
                                                    }}
                                                    src={data[0]}
                                                />
                                            </NavLink>
                                            ) : <></>
                                        }

                                    </Card>
                                </SwiperSlide>

                            </div>
                        );
                    })}
                    <button ref={nextL} style={
                        Object.assign({...style}, {bottom: 0})
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ transform: 'rotate(90deg)', fill: '#1200ba', width: '20px'}}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </button>
                </Swiper>
            </div>




            {/*
                //              //
                // RIGHT SLIDER //
                //              //
            */}

            <div className="leftright-slider" style={{
                position: "fixed",
                top: "10px",
                bottom: "10px",
                right: "10px",
            }}>
                <div class="hover-image-scale" style={{position: 'relative', zIndex: '100', boxShadow: '0 0 20px rgb(18, 0, 186)'}}>
                    <a href='/shop?gender=2'><img class="scalecategories"  src = { women } alt = "Женские часы" style={{width: '255px'}} /></a>
                    <span style={{position: 'absolute', bottom: 1, right: 1, fontWeight: 'bold', color: '#fff', fontSize: '18px', fontFamily: 'Georgia'}}>ЖЕНСКИЕ ЧАСЫ</span>
                </div>

                <Swiper
                        direction='vertical'
                        effect='slide'
                        slidesPerView={6.05}
                        spaceBetween={120}
                        modules={[Navigation]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={{
                            prevEL: prevR.current,
                            nextEl: nextR.current
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevR.current;
                            swiper.params.navigation.nextEl = nextR.current;
                        }}
                        onInit ={ (swiper) => {
                            swiper.el.addEventListener('mouseenter', () => {
                                swiper.autoplay.stop();
                              });

                              swiper.el.addEventListener('mouseleave', () => {
                                swiper.autoplay.start();
                              });
                            }
                        }
                        style={{width: "100%",
                            maxWidth: "940px",
                            height: "81%",
                            display: "flex",
                            alignItems: "center",
                            margin: "auto",
                            position: "relative",
                            padding: "0px 0 0px",
                            boxShadow: '0 0 20px rgb(18, 0, 186)'
                        }}

                >
                    <button ref={prevR} style={Object.assign({...style}, {top: 0})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ transform: 'rotate(-90deg)', fill: '#1200ba', width: '20px'}}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </button>
                        {photosRight?.map((data, ind) => {
                        return (
                            <div>

                                <SwiperSlide key={ind}>
                                    <Card
                                        style={{
                                            width: 255,
                                            objectFit: "contain",
                                            border: "none",
                                            paddingLeft: "5px",
                                        }}
                                    >
                                        {data[0] ? (
                                            <NavLink to={data[1]} class="image-scale">
                                                <Card.Img
                                                    className="mt-1"
                                                    style={{
                                                        width: 245,
                                                        objectFit: "contain",
                                                        margin: "0 auto",
                                                    }}
                                                    src={data[0]}
                                                />
                                            </NavLink>
                                            ) : <></>
                                        }

                                    </Card>
                                </SwiperSlide>

                            </div>
                        );
                        })}
                    <button ref={nextR} style={
                        Object.assign({...style}, {bottom: 0})
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ transform: 'rotate(90deg)', fill: '#1200ba', width: '20px'}}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </button>
                </Swiper>

            </div>
        </>
    )
}

export default Aside;
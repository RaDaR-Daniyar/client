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
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import { Card, } from "react-bootstrap";



var Aside = () => {
    const nextL = useRef();
    const nextR = useRef();
    const prevL = useRef();
    const prevR = useRef();
    const { 0: width, 1: setWidth} = useState(window.innerWidth)
    const { 0: photosLeft, 1: setLPhotos } = useState([
        l1, l2, l3, l4, l5, l6, l7, l8, l9, l10
    ])
    const { 0: photosRight, 1: setRPhotos } = useState([
        r1, r2, r3, r4, r5, r6, r7, r8, r9, r10
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
                border: "1px solid rgb(18, 0, 186)",
                borderRadius: "0.25rem",
            }}>

                <Swiper
                        direction='vertical'
                        effect='slide'
                        slidesPerView="6.05"
                        spaceBetween={20}
                        modules={[Navigation]}
                        navigation={{
                            prevEL: prevL.current,
                            nextEl: nextL.current
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevL.current;
                            swiper.params.navigation.nextEl = nextL.current;
                        }}
                        style={{width: "100%",
                            maxWidth: "940px",
                            height: "100%",
                            margin: "0 auto",
                            position: "relative",
                            padding: "48px 0 60px"
                        }}

                >
                    <button ref={prevL} style={Object.assign({...style}, {top: 0})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ transform: 'rotate(-90deg)', fill: '#1200ba', width: '20px'}}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </button>
                        {photosLeft?.map((photo, ind) => {
                        return (
                            <div style={{height: '90%'}}>
                                <SwiperSlide key={ind} >
                                    <Card
                                    style={{
                                        width: 235,
                                        objectFit: "contain",
                                        border: "none"
                                    }}
                                    >
                                        {photo ? (
                                            <Card.Img
                                                className="mt-1"
                                                style={{
                                                    width: 225,
                                                    objectFit: "contain",
                                                    margin: "0 auto"
                                                }}
                                                src={photo}
                                            />
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
                border: "1px solid rgb(18, 0, 186)",
                borderRadius: "0.25rem",
            }}>


                <Swiper
                        direction='vertical'
                        effect='slide'
                        slidesPerView="6.05"
                        spaceBetween={20}
                        modules={[Navigation]}
                        navigation={{
                            prevEL: prevR.current,
                            nextEl: nextR.current
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevR.current;
                            swiper.params.navigation.nextEl = nextR.current;
                        }}
                        style={{width: "100%",
                            maxWidth: "940px",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            margin: "auto",
                            position: "relative",
                            padding: "48px 0 60px"
                        }}

                >
                    <button ref={prevR} style={Object.assign({...style}, {top: 0})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ transform: 'rotate(-90deg)', fill: '#1200ba', width: '20px'}}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </button>
                        {photosRight?.map((photo, ind) => {
                        return (
                            <div>
                                <SwiperSlide key={ind} >
                                    <Card
                                    style={{
                                        width: 235,
                                        height: 125,
                                        objectFit: "contain",
                                        border: "none",
                                    }}
                                    >
                                        {photo ? (
                                            <Card.Img
                                            className="mt-1"
                                            style={{
                                                    width: 225,
                                                    objectFit: "contain",
                                                    margin: "0 auto"
                                                }}
                                                src={photo}
                                            />
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
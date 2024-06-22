import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from 'react';
import { Card, } from "react-bootstrap";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { getRandom } from "../http/catalogAPI";
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import "swiper/css";
import "swiper/css/navigation";

const Recomendation = () => {

    const prevBtn = useRef();
    const nextBtn = useRef();
    const scrollbar = useRef();
    const [randomProducts, setRandomProducts] = useState(null);
    const [swiper, setSwiper] = useState(null);
    SwiperCore.use([Autoplay, Navigation, Pagination]);

    useEffect(() => {
        getRandom()
            .then((data) => { setRandomProducts(data)})
            .catch((error) =>{
            console.error("Error fetching random products:", error)}
            );
    }, []);

    return (
        <Container className='mt-4'>
            
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: '#1200ba', fontFamily: 'Book Antiqua', fontSize: '32px' }}>Рекомендованные товары</h1>
                <div className="recomendation-swiper">

                <Row className='mt-3'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Navigation, Scrollbar]}
                    autoplay={{ delay: 3000 }}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    navigation={true}
                    onSwiper={setSwiper}
                    scrollbar={{
                    el: scrollbar.current,
                    draggable: true,
                    }}
                    breakpoints={{
                    524: {
                        slidesPerView: 2,
                        navigation: false
                    },
                    768: {
                        slidesPerView: 2.9,
                        spaceBetween: 10,

                        autoplay: false,
                        navigation: false,
                    },
                    1200: {
                        slidesPerView: 3.9,
                        spaceBetween: 10,
                        autoplay: false,
                    },
                    1400: {
                        slidesPerView: 4.9,
                        spaceBetween: 0,
                        autoplay: false,
                    },
                    }}
                >
                    {randomProducts?.map((product) => {
                    return (
                        <div
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",

                        }}
                        >
                            <SwiperSlide key={product.id} >
                                <Card
                                style={{
                                    width: 235,
                                    height: 280,
                                    objectFit: "contain",
                                    cursor: "pointer",
                                }}
                                >
                                    <Link to={`/product/${product.id}`}>
                                        {product.image ? (
                                        <Card.Img
                                            className="mt-1"
                                            style={{
                                                width: 225,
                                                height: 197,
                                                marginLeft: 3,
                                                objectFit: "contain",
                                            }}
                                            variant="top"
                                            src={process.env.REACT_APP_IMG_URL + product.image}
                                        />
                                        ) : (
                                        <Card.Img
                                            variant="top"
                                            src={process.env.REACT_APP_IMG_URL + product.image +".webp"}
                                        />
                                        )}
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </SwiperSlide>

                        </div>
                    );
                    })}
                </Swiper>
                </Row>
                </div>
            
        </Container>

    )
}

export default Recomendation;
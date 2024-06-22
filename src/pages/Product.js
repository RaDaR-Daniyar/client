import { Container, Row, Col, Button, Image, Spinner, Card, } from "react-bootstrap";
import { useEffect, useState, useContext, useRef } from "react";
import { fetchOneProduct, fetchCategoryProducts, fetchBrendProducts } from "../http/catalogAPI.js";
import { useParams } from "react-router-dom";
import { append } from "../http/basketAPI.js";
import { AppContext } from "../components/AppContext.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import planet from "../assets/icon-planet.png";
import box from "../assets/icon-box.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Product = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const scrollbar = useRef();
  const { id } = useParams();
  const { basket } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const [sameCollectionProducts, setSameCollectionProducts] = useState(null);
  const [swiper, setSwiper] = useState(null);
  console.log(sameCollectionProducts);
  useEffect(() => {
    fetchOneProduct(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));

    }, [id]);
    useEffect(() => {
        if (!product) {
            return;
        }
        if (product.brand.name === 'Victorinox'
            || product.brand.name === "Waterman"
            || product.brand.name === "Parker"
            || product.brand.name === "Lamy"
        ) {
            fetchBrendProducts(id)
                .then((data => setSameCollectionProducts(data)))
                .catch((error) => {
                console.log("Error fetching same collection products:", error)
            })
            return;
        }

        fetchCategoryProducts(id)
            .then((data) => {debugger; setSameCollectionProducts(data)})
          .catch((error) =>
            console.error("Error fetching same collection products:", error)
          );

    }, [product])

  const handleClick = (productId) => {
    append(productId).then((data) => {
      basket.products = data.products;
    });
  };

  if (!product) {
    return <Spinner animation="border" />;
  }

  function renderProperty(label, value) {
    return value ? (
      <p>
        <b>{label}:</b> {value}
      </p>
    ) : null;
  }

  const propsToDisplay = product.props.map((obj) => ({ label: obj.name, value: obj.value }));
  console.log(propsToDisplay)
  const propertiesToDisplay = [
    { label: "Бренд", value: product.brand?.name },
    { label: "Тип механизма", value: product.mehanizm?.name },
    { label: "Пол", value: product.gender?.name },
    { label: "Форма корпуса", value: product.shape?.name },
    { label: "Материал корпуса", value: product.material?.name },
    { label: "Стекло", value: product.glass?.name },
    { label: "Материал ремешка/браслета", value: product.strap?.name },
    { label: "Запас хода", value: product.power?.name },
    { label: "Водонепроницаемость", value: product.water?.name },
    { label: "Тип", value: product.brend?.name },
    ...propsToDisplay
  ];

  const titleNameList = ['Victorinox', 'Parker', 'Waterman', 'Lamy'];
  const brendName = product.brand.name;

  return (
    <Container>
        <Helmet>
            {
                titleNameList.includes(brendName)
                    ? <title>Купить {product.brend.name || ''} {product.name} в Алматы</title>
                    : <title>Купить {product.gender.name || ''} {product.name} в Алматы</title>
            }
        </Helmet>
        <Card className="mt-4" style={{ padding: "2%", borderColor: '#1200ba' }}>
            <Row>
                <Col lg={6} style={{marginRight: '30px'}}>
                    <div class='hide-on-mobile'>
                        {product.image ? (
                        <Image
                            height={640}
                            src={process.env.REACT_APP_IMG_URL + product.image}
                            style={{ marginTop: 23, display: 'block', margin: 'auto', paddingTop: '5%' }}
                        />
                        ) : (
                        <Image width={300} src="http://via.placeholder.com/300" />
                        )}
                    </div>
                    <div class='show-on-mobile' style={{height: '2500rem'}}>
                        {product.image ? (
                            <Image width={'250rem'}
                            src={process.env.REACT_APP_IMG_URL + product.image}
                            style={{ marginTop: 23, display: 'block', margin: 'auto', paddingTop: '5%' }}
                        />
                        ) : (
                            <Image width={350} src="http://via.placeholder.com/300" />
                        )}
                    </div>
                </Col>
                <Col lg={5} style={{ textAlign: "left", marginTop: 20 }}>
                      <h3>{product.name} {product.finId ? <span style={{ border: '2px solid #0d6efd', marginLeft: '15px', borderRadius: '6px', fontSize: '24px', }}> -{product.finId}%</span>:''}</h3>

                      <h3>{product.price} тг.
                          {product.finId ?
                              <>
                                  <span style={{fontSize: '20px', textDecoration: 'line-through', margin: '0 10px', color:'rgba(0, 0, 0, 0.176)'}}>{Math.ceil(product.price * 100 / (100 - product.finId))} тг.</span>
                              </> : ''
                          }
                      </h3>
                    <p>
                        <img src={planet} alt="map" style={{ width: "18px" }} />{" "} Международная гарантия
                    <br />
                        <img src={box} alt="map" style={{ width: "18px" }} /> Бесплатная доставка
                    </p>
                    <Button onClick={() => handleClick(product.id)}>
                        Добавить в корзину
                    </Button>
                    <div style={{ marginTop: 40 }}>
                        {propertiesToDisplay.map((property) => renderProperty(property.label, property.value) )}
                    </div>
                </Col>
            </Row>
        </Card>
        <Card className="mt-4" style={{ padding: "1%", borderColor: '#1200ba' }}>
            <div>
                <h4 className="mb-4">Сопутствующие товары:</h4>
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
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        autoplay: false,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        autoplay: false,
                    },
                    1300: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                        autoplay: false,
                    },
                    }}
                >
                    {sameCollectionProducts?.map((product) => {
                    return (
                        <div
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        >
                            <SwiperSlide key={product.id}>
                                <Card
                                style={{
                                    width: 204,
                                    height: 250,
                                    objectFit: "contain",
                                    cursor: "pointer",
                                }}
                                >
                                    <Link to={`/product/${product.id}`}>
                                        {product.image ? (
                                        <Card.Img
                                            className="mt-1"
                                            style={{
                                            width: 198,
                                            height: 240,
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
            </div>
        </Card>
    </Container>
  );
};

export default Product;
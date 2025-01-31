import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import SearchField from '../components/SearchField.js';
import CategoryBar from '../components/CategoryBar.js';
import BrandBar from '../components/BrandBar.js';
import MehanizmBar from '../components/MehanizmBar.js';
import GenderBar from '../components/GenderBar.js';
import ShapeBar from '../components/ShapeBar.js';
import MaterialBar from '../components/MaterialBar.js';
import GlassBar from '../components/GlassBar.js';
import StrapBar from '../components/StrapBar.js';
import PowerBar from '../components/PowerBar.js';
import WaterBar from '../components/WaterBar.js';
import BrendBar from '../components/BrendBar.js';
import SaleBar from '../components/SaleBar.js';
import ProductList from '../components/ProductList.js';
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../components/AppContext.js';
import {fetchCategories, fetchBrands, fetchMehanizms, fetchGenders, fetchShapes, fetchMaterials, fetchGlasses, fetchStraps, fetchPowers, fetchWaters, fetchBrends, fetchAllProducts} from '../http/catalogAPI.js';
import { observer } from 'mobx-react-lite';
import { useLocation, useSearchParams, createSearchParams, useNavigate } from 'react-router-dom';
import ProductsSort from '../components/PrtoductsSort.js';
import PriceSlider from '../components/PriceSlider/PriceSlider.jsx';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import '../sections/style.css'
import swatch from '../assets/button/swatch.png'
import calvin from '../assets/button/calvin.png'
import anne from '../assets/button/anne.png'
import diesel from '../assets/button/diesel.png'
import citizen from '../assets/button/citizen.png'
import orient from '../assets/button/orient.png'
import casio from '../assets/button/casio.png'
import parker from '../assets/button/parker.png'
import waterman from '../assets/button/waterman.png'
import lamy from '../assets/button/lamy.png'
import victorinox from '../assets/button/victorinox.png'
import skidka from '../assets/button/skidka.png'

const getSearchParams = (searchParams) => {
    let category = searchParams.get('category');
    if (category && /[1-9][0-9]*/.test(category)) {
        category = parseInt(category);
    }
    let brand = searchParams.get('brand');
    if (brand && /[1-9][0-9]*/.test(brand)) {
        brand = parseInt(brand);
    }
    let mehanizm = searchParams.get('mehanizm');
    if (mehanizm && /[1-9][0-9]*/.test(mehanizm)) {
        mehanizm = parseInt(mehanizm);
    }
    let gender = searchParams.get('gender');
    if (gender && /[1-9][0-9]*/.test(gender)) {
        gender = parseInt(gender);
    }
    let shape = searchParams.get('shape');
    if (shape && /[1-9][0-9]*/.test(shape)) {
        shape = parseInt(shape);
    }
    let material = searchParams.get('material');
    if (material && /[1-9][0-9]*/.test(material)) {
        material = parseInt(material);
    }
    let glass = searchParams.get('glass');
    if (glass && /[1-9][0-9]*/.test(glass)) {
        glass = parseInt(glass);
    }
    let strap = searchParams.get('strap');
    if (strap && /[1-9][0-9]*/.test(strap)) {
        strap = parseInt(strap);
    }
    let power = searchParams.get('power');
    if (power && /[1-9][0-9]*/.test(power)) {
        power = parseInt(power);
    }
    let water = searchParams.get('water');
    if (water && /[1-9][0-9]*/.test(water)) {
        water = parseInt(water);
    }
    let page = searchParams.get('page');
    if (page && /[1-9][0-9]*/.test(page)) {
      page = parseInt(page);
    }
    let brend = searchParams.get('brend');
    if (brend && /[1-9][0-9]*/.test(brend)) {
        brend = parseInt(brend);
    }
    debugger
    let sale = searchParams.get('sale');
    return { category, brand, mehanizm, gender, shape, material, glass, strap, power, water, brend, page, sale };
  };

const Shop = observer(() => {
    const navigate = useNavigate();
    const { catalog } = useContext(AppContext);
    const [categoriesFetching, setCategoriesFetching] = useState(true);
    const [brandsFetching, setBrandsFetching] = useState(true);
    const [mehanizmsFetching, setMehanizmsFetching] = useState(true);
    const [gendersFetching, setGendersFetching] = useState(true);
    const [shapesFetching, setShapesFetching] = useState(true);
    const [materialsFetching, setMaterialsFetching] = useState(true);
    const [glassesFetching, setGlassesFetching] = useState(true);
    const [strapsFetching, setStrapsFetching] = useState(true);
    const [powersFetching, setPowersFetching] = useState(true);
    const [watersFetching, setWatersFetching] = useState(true);
    const [brendsFetching, setBrendsFetching] = useState(true);
    const [productsFetching, setProductsFetching] = useState(true);
    const [sortOrder, setSortOrder] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [maxPrice, setMaxPrice] = useState(null);
    const mobileFiltersRef = useRef();
    const filterOpenButtonRef = useRef();

    const containerRef = useRef();

    const {0: width, 1: setWidth} = useState()

    const resizeWindow = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        setWidth(window.innerWidth)

        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    });
    const { 0: isOpenFilters, 1: setIsOpenFilters } = useState(false);

    useEffect(() => {
        async function getPrices() {
            const prices = await axios.get(process.env.REACT_APP_IMG_URL+`api/product/price`);
            setMaxPrice(prices.data.max);
        }
        getPrices();
    }, []);

    useEffect(() => {

    fetchCategories()
        .then((data) => (catalog.categories = data))
        .finally(() => setCategoriesFetching(false));

    fetchBrands()
        .then((data) => (catalog.brands = data))
        .finally(() => setBrandsFetching(false));

    fetchMehanizms()
        .then((data) => (catalog.mehanizms = data))
        .finally(() => setMehanizmsFetching(false));

    fetchGenders()
        .then((data) => (catalog.genders = data))
        .finally(() => setGendersFetching(false));

    fetchShapes()
        .then((data) => (catalog.shapes = data))
        .finally(() => setShapesFetching(false));

    fetchMaterials()
        .then((data) => (catalog.materials = data))
        .finally(() => setMaterialsFetching(false));

    fetchGlasses()
        .then((data) => (catalog.glasses = data))
        .finally(() => setGlassesFetching(false));

    fetchStraps()
        .then((data) => (catalog.straps = data))
        .finally(() => setStrapsFetching(false));

    fetchPowers()
        .then((data) => (catalog.powers = data))
        .finally(() => setPowersFetching(false));

    fetchWaters()
        .then((data) => (catalog.waters = data))
        .finally(() => setWatersFetching(false));

    fetchBrends()
        .then((data) => (catalog.brends = data))
        .finally(() => setBrendsFetching(false));

        const { category, brand, mehanizm, gender, shape, material, glass, strap, power, water, brend, page, sale } =
        getSearchParams(searchParams);
        catalog.category = category;
        catalog.brand = brand;
        catalog.mehanizm = mehanizm;
        catalog.gender = gender;
        catalog.shape = shape;
        catalog.material = material;
        catalog.glass = glass;
        catalog.strap = strap;
        catalog.power = power;
        catalog.water = water;
        catalog.brend = brend;
        catalog.page = page ?? 1;
        catalog.withSale = sale;
    }, []);

    useEffect(() => {
        const { category, brand, mehanizm, shape, gender, material, glass, strap, power, water, brend, page, sale } = getSearchParams(searchParams);
        if (category || brand || mehanizm || gender || shape || material || glass || strap || power || water || brend || page || sale) {
            if (category !== catalog.category) {catalog.category = category}
            if (brand !== catalog.brand) {catalog.brand = brand}
            if (mehanizm !== catalog.mehanizm) {catalog.mehanizm = mehanizm}
            if (gender !== catalog.gender) {catalog.gender = gender}
            if (shape !== catalog.shape) {catalog.shape = shape}
            if (material !== catalog.material) {catalog.material = material}
            if (glass !== catalog.glass) {catalog.glass = glass}
            if (strap !== catalog.strap) {catalog.strap = strap}
            if (power !== catalog.power) {catalog.power = power}
            if (water !== catalog.water) {catalog.water = water}
            if (brend !== catalog.brend) {catalog.brend = brend}
            if (page !== catalog.page) { catalog.page = page ?? 1 }
            if (sale !== catalog.withSale) { catalog.withSale = true}
        } else {
            catalog.category = null;
            catalog.brand = null;
            catalog.mehanizm = null;
            catalog.gender = null;
            catalog.shape = null;
            catalog.material = null;
            catalog.glass = null;
            catalog.strap = null;
            catalog.power = null;
            catalog.water = null;
            catalog.brend = null;
            catalog.withSale = null;
            catalog.page = 1;
        }
    }, [location.search]);

    useEffect(() => {
        setProductsFetching(true);
        fetchAllProducts(
            searchTerm,
            catalog.category,
            catalog.brand,
            catalog.mehanizm,
            catalog.gender,
            catalog.shape,
            catalog.material,
            catalog.glass,
            catalog.strap,
            catalog.power,
            catalog.water,
            catalog.brend,
            1,
            catalog.limit,
            sortOrder,
            catalog.minPrice,
            catalog.maxPrice,
            catalog.withSale
            )
        .then((data) => {
                const filtered = data.rows.filter((product) => {
                    return product.price > catalog.minPrice && product.price <= catalog.maxPrice;
                });
                catalog.count = data.count;
                filtered.splice(catalog.limit * catalog.page, filtered.length);
                console.log('filtered: ', filtered);
                catalog.products = filtered;
            })
            .finally(() => setProductsFetching(false));
            catalog.page = 1;

            navigate({
                pathname: "/shop.html",
                search: "?" + createSearchParams(searchParams),
            });
        }, [
            searchTerm,
            catalog.category,
            catalog.brand,
            catalog.mehanizm,
            catalog.gender,
        catalog.shape,
        catalog.material,
        catalog.glass,
        catalog.strap,
        catalog.power,
        catalog.water,
        catalog.brend,
        catalog.minPrice,
        catalog.maxPrice,
        sortOrder,
        maxPrice,
        catalog.withSale,
    ]);

    useEffect(() => {

        if (width > 767) {
            setProductsFetching(true);
        }
        fetchAllProducts(
            searchTerm,
            catalog.category,
            catalog.brand,
            catalog.mehanizm,
            catalog.gender,
            catalog.shape,
            catalog.material,
            catalog.glass,
            catalog.strap,
            catalog.power,
            catalog.water,
            catalog.brend,
            catalog.page,
            catalog.limit,
            sortOrder,
            catalog.minPrice,
            catalog.maxPrice,
            catalog.withSale
        )
            .then((data) => {

                const filtered = data.rows.filter((product) => {
                    return product.price > catalog.minPrice && product.price <= catalog.maxPrice;
                });
                catalog.count = data.count;
                filtered.splice(catalog.limit * catalog.page, filtered.length);
                console.log('filtered: ', filtered);

                if (width <= 767 &&
                    catalog.products[catalog.products - 1]?.id != filtered[filtered.length - 1].id
                ) {
                    return catalog.products.push(...filtered);
                }
                catalog.products = filtered;

            })
            .finally(() => setProductsFetching(false));
    }, [
        catalog.page,
    ])

    const closeFilters = (event) => {

        var path = event.composedPath() || event.path;

        if (!path.includes(mobileFiltersRef.current) && !path.includes(filterOpenButtonRef.current)) {
            setIsOpenFilters(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', closeFilters)

        return () => document.body.removeEventListener('click', closeFilters)
    }, [])

    useEffect(() => {
        if (isOpenFilters) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
     }, [isOpenFilters])

    return (
        <Container ref={containerRef} style={{position: 'relative'}}>
            <Helmet>
                <title>Купить наручные часы в Алматы | Купить мужские часы в Алматы | Купить женские часы в Алматы</title>
                <meta name="description" content="В нашем магазине швейцарских часов в Алматы представлен широкий выбор брендовых часов, представленных лучшими мировыми производителями. 
                    Мы стремимся предоставить нашим клиентам доступ к самым стильным и высококачественным часам, которые станут неотъемлемой частью их индивидуального стиля и повседневного гардероба. 
                    В нашем ассортименте вы найдете разнообразные наручные часы, швейцарские армейские ножи, перьевые ручки и шариковые ручки от известных брендов, таких как Anne Klein, Calvin Klein, 
                    Citizen, Diesel, Guess, Orient, Swatch, Parker, Lamy, Waterman. Каждый из представленных у нас брендов славится своим уникальным дизайном, инновационными технологиями и высоким 
                    качеством материалов, подчеркивающим индивидуальность и статус наших клиентов."/>
                <meta name="keywords" content="купить японские наручные часы в Алматы, купить швейарские наручные часы в Алматы, наручные часы в Алматы, часы в Алматы,
                    купить наручные часы, наручные часы, часы, купить мужские часы, купить женские часы, мужские часы, женские часы, детские часы, спортивные часы, модные часы, перьевые ручки и шариковые ручки Parker, Waterman и Lamy,
                    Швейцарские армейские ножи и столовые приборы Victorinox" />
            </Helmet>
            <Card style={{ borderColor: '#1200ba'}}>
                {width > 767 && <Row className="mt-1" style={{marginLeft: '1px'}}>
                    <Col md={3}>
                        <h4 style={{textAlign: 'center', marginTop: '4px', color: '#1200ba', fontFamily: 'Book Antiqua', fontWeight: 'bold'}}>Фильтр товаров</h4>
                    </Col>
                    <Col mt={5} style={{marginRight: '5px'}}>
                        <div class="hide-on-mobile">
                            <SearchField onSearch={setSearchTerm} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <ProductsSort setSortOrder={setSortOrder}/>
                    </Col>
                </Row>}
                <Row className="mt-1" style={{marginLeft: '1px'}}>
                    {width > 767 &&
                        <Col md={3} className="mb-1">
                            <div className="mt-1" style={{marginRight: '10px'}}>{maxPrice ? <PriceSlider maxPrice={maxPrice} /> : null}</div>
                            <div className="mt-1"style={{marginRight: '10px'}}>{brandsFetching ? <Spinner animation="border" /> : <BrandBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{mehanizmsFetching ? <Spinner animation="border" /> : <MehanizmBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{gendersFetching ? <Spinner animation="border" /> : <GenderBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{shapesFetching ? <Spinner animation="border" /> : <ShapeBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{materialsFetching ? <Spinner animation="border" /> : <MaterialBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{glassesFetching ? <Spinner animation="border" /> : <GlassBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{strapsFetching ? <Spinner animation="border" /> : <StrapBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{powersFetching ? <Spinner animation="border" /> : <PowerBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{watersFetching ? <Spinner animation="border" /> : <WaterBar />}</div>
                            <div className="mt-1" style={{marginRight: '10px'}}>{watersFetching ? <Spinner animation="border" /> : <BrendBar />}</div>
                            <div className="mt-1" style={{ marginRight: '10px' }}><SaleBar /></div>
                            <Card className='mt-1' style={{height: '40px', marginRight: '10px'}}>
                                <a href='/shop.html' style={{
                                    fontSize: '14px', 
                                    color: 'black', 
                                    textDecoration: 'none', 
                                    marginTop: '5px', 
                                    marginLeft: '12px', 
                                    fontFamily: 'Book Antiqua'
                                }}>Сбросить</a>
                            </Card>
                        </Col>
                    }
                    <div class='show-on-mobile'>
                        <Row>
                            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} md={3}>
                                <a href='/shop.html?brand=11'style={{marginRight: '0.2em'}}><img  src = { swatch } alt = "Купить часы swatch в Алматы" height={'25em'}/></a>
                                <a href='/shop.html?brand=4'style={{marginRight: '0.2em'}}><img  src = { calvin } alt = "Купить часы calvin klein в Алматы" height={'25em'}/></a>
                                <a href='/shop.html?brand=2'><img  src = { anne } alt = "Купить часы anne klein в Алматы" height={'25em'}/></a>
                            </Col>
                            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} md={3} className='mt-1'>
                                <a href='/shop.html?brand=5'style={{marginRight: '0.2em'}}><img  src = { diesel } alt = "Купить часы diesel в Алматы" height={'25em'}/></a>
                                <a href='/shop.html?brand=3'style={{marginRight: '0.2em'}}><img  src = { citizen } alt = "Купить часы citizen в Алматы" height={'25em'}/></a>
                                <a href='/shop.html?brand=9'style={{marginRight: '0.2em'}}><img  src = { orient } alt = "Купить часы orient в Алматы" height={'25em'}/></a>
                                <a href='/shop.html?brand=19'><img  src = { casio } alt = "Купить часы casio в Алматы" height={'25em'}/></a>
                            </Col>
                            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} md={3} className='mt-1'>
                                <a href='/shop.html?brand=17'style={{marginRight: '0.2em'}}><img  src = { parker } alt = "Купить ручки parker в Алматы" height={'25em'}/></a>
                                <a href='/shop.html?brand=16'style={{marginRight: '0.2em'}}><img  src = { waterman } alt = "Купить ручки waterman в Алматы" height={'25em'}/></a>
                                <a href='/shop.html?brand=18'><img  src = { lamy } alt = "Купить ручки lamy в Алматы" height={'25em'}/></a>
                            </Col>
                            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3px'}} md={3} className='mt-1'>
                                <a href='/shop.html?brand=15'style={{marginRight: '0.2em'}}><img  src = { victorinox } alt = "Купитьножи victorinox в Алматы" height={'25em'}/></a>
                                <a href='/shop.html?sale=true'><img  src = { skidka } alt = "Купить аксессуары со скидкой в Алматы" height={'25em'}/></a>
                            </Col>
                        </Row>
                    </div>
                    <Col md={9}>
                        <div style={{marginRight: '12px'}}>{productsFetching ? (<Spinner animation="border" />) : (<ProductList sortOrder={sortOrder} />)}</div>
                    </Col>
                </Row>
            </Card>
            {width <= 767 &&
                <>
                    <Col className="d-flex justify-content-center" style={{right:'0', left:'0', position: 'fixed', bottom: '10px', zIndex:100 }}>
                        <div className='mr-3'>
                        <button
                            style={{
                                width: '170px',
                                height: '37px',
                                borderRadius: '5px',
                                borderColor: '#1200ba',
                                backgroundColor: 'white',
                                fontFamily: 'Book Antiqua'
                            }}
                            onClick={() => {setIsOpenFilters(true)}}
                            ref={filterOpenButtonRef}
                        >
                            Фильтры
                        </button>
                        </div>

                        <div style={{marginTop: '-0.22rem', marginRight: '-60px', marginLeft:"11x"}}>
                            <ProductsSort status='withoutName' setSortOrder={setSortOrder}/>
                        </div>
                    </Col>
                    { <Col
                        md={3}
                        className="mb-3"
                        style={Object.assign({
                            position: 'fixed',
                            zIndex: '1001',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0, 0, 0, .3)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            left: '0',
                            right: 0,
                            top: 0,
                            bottom: '-19px',
                            overflow: 'scroll',
                        },isOpenFilters? {display: 'flex'}:{display: 'none'})}
                    >

                        <div
                            style={{
                                paddingTop: '25px',
                                overflow: 'hidden',
                                borderRadius: '10px',
                                border: '2px solid rgb(18, 0, 186)',
                                position: 'relative',
                                backgroundColor: 'white',
                            }
                        }
                            ref={mobileFiltersRef}
                        >
                        <div style={{
                            padding: '0 25px 25px',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            height: '25rem',
                        }
                    }>

                            <button
                                style={{
                                    position: 'absolute',
                                    fontSize: '40px',
                                    zIndex: 1002,
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    color: '#949494',
                                    right: '50px',
                                    transform: 'rotate(45deg)',
                                    top: '0',
                                    boxShadow: 'none'

                                }}
                                onClick={() => {setIsOpenFilters(false)}}
                                >+</button>
                                <div style={{marginRight: '10px'}}>{maxPrice ? <PriceSlider maxPrice={maxPrice} /> : null}</div>
                                <div style={{marginRight: '10px'}}>{brandsFetching ? <Spinner animation="border" /> : <BrandBar />}</div>
                                <div className="mt-1" style={{marginRight: '10px'}}>{mehanizmsFetching ? <Spinner animation="border" /> : <MehanizmBar />}</div>
                                <div className="mt-1" style={{marginRight: '10px'}}>{gendersFetching ? <Spinner animation="border" /> : <GenderBar />}</div>
                                <div className="mt-1" style={{marginRight: '10px'}}>{shapesFetching ? <Spinner animation="border" /> : <ShapeBar />}</div>
                                <div className="mt-1" style={{marginRight: '10px'}}>{materialsFetching ? <Spinner animation="border" /> : <MaterialBar />}</div>
                                <div className="mt-1" style={{marginRight: '10px'}}>{glassesFetching ? <Spinner animation="border" /> : <GlassBar />}</div>
                                <div className="mt-1" style={{marginRight: '10px'}}>{strapsFetching ? <Spinner animation="border" /> : <StrapBar />}</div>
                                <div className="mt-1" style={{marginRight: '10px'}}>{powersFetching ? <Spinner animation="border" /> : <PowerBar />}</div>
                                <div className="mt-1" style={{marginRight: '10px'}}>{watersFetching ? <Spinner animation="border" /> : <WaterBar />}</div>
                                <div className="mt-1" style={{ marginRight: '10px' }}>{brendsFetching ? <Spinner animation="border" /> : <BrendBar />}</div>
                                {<div className="mt-3" style={{ marginRight: '10px' }}><SaleBar /></div>}
                                <Card className='mt-1' style={{height: '40px', marginRight: '10px'}}>
                                    <a href='/shop.html' style={{
                                        fontSize: '18px', 
                                        color: 'black', 
                                        textDecoration: 'none', 
                                        marginTop: '5px', 
                                        marginLeft: '12px', 
                                        fontFamily: 'Book Antiqua'
                                    }}>Сбросить</a>
                                </Card>
                        </div>
                        </div>
                    </Col>}
                </>
            }
        </Container>
    );
});

export default Shop;
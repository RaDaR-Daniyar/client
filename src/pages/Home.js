import Container from 'react-bootstrap/Container';
import CarouselBox from '../sections/CarouselBox.js';
import ClockMan from '../sections/clockman.js';
import ClockWoman from '../sections/clockwoman.js';
import Pen from '../sections/pen.js';
import Knife from '../sections/knife.js';
import About from '../sections/about.js'
import Recomendation from '../components/Recomendation.js'
import Categories from '../components/Categories.js';
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <Container>
            <Helmet>
                <title>Интернет магазин наручных часов в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин часов"/>
            </Helmet>
            <Row>
                <CarouselBox />
                <About />
                <Categories />
                <Recomendation />
            </Row>
        </Container>
    )
}

export default Home
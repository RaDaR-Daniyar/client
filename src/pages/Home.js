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
                <meta name="description" content="В нашем магазине швейцарских часов и японских часов в Алматы представлен широкий выбор брендовых часов, 
                    представленных лучшими мировыми производителями. Мы стремимся предоставить нашим клиентам доступ к самым стильным и 
                    высококачественным часам, которые станут неотъемлемой частью их индивидуального стиля и повседневного гардероба. В нашем ассортименте 
                    вы найдете разнообразные наручные часы, швейцарские армейские ножи, перьевые ручки и шариковые ручки от известных брендов, таких как Anne Klein, 
                    Calvin Klein, Citizen, Diesel, Guess, Orient, Swatch, Parker, Lamy, Waterman. Каждый из представленных у нас брендов славится своим уникальным 
                    дизайном, инновационными технологиями и высоким качеством материалов, подчеркивающим индивидуальность и статус наших клиентов."/>
                <meta name="keywords" content="купить японские наручные часы в Алматы, купить швейарские наручные часы в Алматы, наручные часы в Алматы, часы в Алматы,
                    купить наручные часы, наручные часы, часы, купить мужские часы, купить женские часы, мужские часы, женские часы, детские часы, спортивные часы, модные часы, перьевые ручки и шариковые ручки Parker, Waterman и Lamy,
                    Швейцарские армейские ножи и столовые приборы Victorinox" />
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
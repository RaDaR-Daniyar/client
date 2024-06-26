import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import delivery from "../assets/delivery.jpg";
import deliverymap from "../assets/deliverymap.jpg";
import { Helmet } from 'react-helmet';

const Delivery = () => {
    return (
        <Container>
            <Helmet>
                <title>Доставка и оплата наручных часов и швейцарских ножей, перьувые ручки и шароковые ручки по Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Доставка наручных часов, шариковые ручки и перьевые ручки по Алматы возможна в день заказа, либо на следующий день, 
                    если это не праздничный или выходной день. Доставка по Казахстану занимает 2-3 дня (выходные, праздничные дни, а также день отправки не входят в срок доставки). В 
                    нашем ассортименте вы найдете разнообразные наручные часы, швейцарские армейские ножи, перьевые ручки и шариковые ручки от известных брендов, таких как Anne Klein, 
                    Calvin Klein, Citizen, Diesel, Guess, Orient, Swatch, Parker, Lamy, Waterman."/>
                <meta name="keywords" content="купить японские наручные часы в Алматы, купить швейарские наручные часы в Алматы, наручные часы в Алматы, часы в Алматы,
                    купить наручные часы, наручные часы, часы, купить мужские часы, купить женские часы, мужские часы, женские часы, детские часы, спортивные часы, модные часы, перьевые ручки и шариковые ручки Parker, Waterman и Lamy,
                    Швейцарские армейские ножи и столовые приборы Victorinox" />
            </Helmet>
            <Card style={{borderColor: '#1200ba'}}>
                <div style={{padding: '2%', textAlign: 'center'}}>
                    <h2>Доставка</h2>
                    <h4>Быстрая и удобная доставка заказов по всей территории Казахстана</h4>
                    <p>Доставка осуществляется только при указании точного адреса и дополнительного контактного номера телефона.</p>
                </div>
            </Card>
            <Card className='mt-4' style={{padding: '2%', borderColor: '#1200ba'}}>
                <Row>
                    <Col md={5} className='mt-4'>
                        <img src={ delivery } alt="Авторизованный сервисный центр в Казахстане - SWService" style={{width: '100%'}} />
                    </Col>
                    <Col md={7}>
                        <h4>Курьерская доставка</h4>
                        <p style={{textAlign: 'justify'}}>Доставка по Алматы возможна в день заказа, либо на следующий день, если это не праздничный или выходной день.
                            Доставка по Казахстану занимает 2-3 дня (выходные, праздничные дни, а также день отправки не входят в срок доставки).
                        </p>
                        <p>Условия бесплатной доставки:
                            <ul>
                                <li>
                                    Сумма заказа должна быть больше чем на 50000 тенге, осуществляется только в пределах города, где есть пункт выдачи товаров, подробности уточняйте у вашего менеджера
                                </li>
                            </ul>
                        </p>
                        <p>Оплачиваемая доставка:
                            <ul>
                                <li>
                                    В случае если сумма заказа меньше 50000 тенге, то доставка будет стоить от 1000 тенге, подробности уточняйте у вашего менеджера
                                </li>
                                <li>
                                    Стоимость доставки за черту города, например, в Алматинскую область рассчитывается с учетом удаленности населенного пункта.
                                </li>
                            </ul>
                        </p>
                        <h4 style={{color: 'red', textDecoration: 'underline', fontSize: 22, textAlign: 'center'}}>При отказе от товара, за доставку в оба конца оплачивает получатель (клиент).</h4>
                    </Col>
                </Row>
            </Card>
            <Card className='mt-4' style={{padding: '2%', borderColor: '#1200ba'}}>
                <Row>
                    <Col md={5}>
                        <a href='https://2gis.kz/almaty/search/%D0%BC%D1%83%D0%BA%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%2070/firm/70000001054138837?m=76.91472%2C43.259361%2F18.65%2Fr%2F6.54' target='_blank'>
                            <img src={ deliverymap } alt="Авторизованный сервисный центр в Казахстане - SWService" style={{width: '100%'}} />
                        </a>
                    </Col>
                    <Col md={7}>
                        <h4>Самовывоз</h4>
                        <p>Заказ доступен для самовывоза в г. Алматы; забрать товар самостоятельно вы можете в пункте выдачи (нашего магазина), расположенный по адресу::
                            <ul>
                                <li>
                                    Салон часов “G-Factory” г. Алматы, ул. Муканова д.70, тел: +7(700)306-90-00.
                                </li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </Card>
            <Card className='mt-4' style={{borderColor: '#1200ba'}}>
                <div style={{padding: '2%', textAlign: 'center'}}>
                    <h2>Оплата</h2>
                    <h4 style={{textAlign: 'justify'}}>Наличный расчет</h4>
                    <p style={{textAlign: 'justify'}}>Клиент оплачивает заказ наличными в магазине, либо курьеру при получении заказа; все необходимые документы, сопровождающие куплю-продажу, прилагаются к заказу.</p>
                    <h4 style={{textAlign: 'justify'}}>Безналичный расчет</h4>
                    <h4 style={{textAlign: 'justify'}}>1. Оплата покупки с помощью Kaspi QR/Kaspi Pay:</h4>
                    <p style={{textAlign: 'justify'}}>В магазине G-Factory вы можете приобрести часы, оплатив покупку очень удобным способом: с помощью QR-кода в мобильном приложении Kaspi.kz</p>
                    <h4 style={{textAlign: 'justify'}}>2. Оплата пластиковой картой через терминал:</h4>
                    <p style={{textAlign: 'justify'}}>
                        Клиент может оплатить заказ пластиковой картой через терминал при самовывозе заказа из магазина. 
                        Услуга доступна только в г. Алматы. В случае с курьерской доставкой, необходимо предварительное согласование с менеджером. 
                        К оплате принимаются карты: VISA, MasterCard
                    </p>
                    <h4 style={{textAlign: 'justify'}}>3. Банковский перевод:</h4>
                    <p style={{textAlign: 'justify'}}>3.1 От физических лиц</p>
                    <p style={{textAlign: 'justify'}}>
                        Клиент, выступающий как физическое лицо, может оплатить заказ через любой банк, действующий на территории Республики Казахстан. После оформления заказа наш 
                        менеджер высылает клиенту заполненную банковскую квитанцию для оплаты, отправка заказа осуществляется после зачисления средств на наш расчетный счет. 
                        Срок зачисления денежных средств в среднем составляет 2-3 рабочих дня.
                    </p>
                    <p style={{textAlign: 'justify'}}>
                        <b>Внимание:</b> при оплате заказа безналичным переводом взимается комиссия банка в размере до 3% от суммы платежа. В случае, если перевод денег не будет осуществлен в 
                        течение 3-х дней с момента отправления квитанции, заказ аннулируется.
                    </p>
                    <p style={{textAlign: 'justify'}}>3.2 От юридических лиц</p>
                    <p style={{textAlign: 'justify'}}>
                        Оплата заказов клиентами-юридическими лицами возможна только по безналичному расчету. После оформления заказа и предоставления реквизитов организации-покупателя 
                        формируется счёт на оплату, который высылается клиенту электронной почтой. Доставка заказа осуществляется после зачисления средств на расчетный счет продавца, 
                        все необходимые для бухгалтерии документы (оригинал счета на оплату, счет-фактура и ТТН) выдаются вместе с заказом при его получении.
                    </p>
                </div>
            </Card>
        </Container>
    )
}

export default Delivery
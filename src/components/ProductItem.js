import { Card, Col } from 'react-bootstrap'
import './navigation/style.css'
import { Link } from 'react-router-dom'

const ProductItem = ({data}) => {
    return (
        <Col xl={3} lg={4} sm={3} style={{marginBottom: 10}} >
                <Link to={`/product/${data.id}`} style={{textDecoration: 'none'}}>
                <Card style={{width: '100%', height: '460px', objectFit: 'contain', cursor: 'pointer'}}>
                    {data.image ? (
                        <Card.Img class='scale' className='mt-1' style={{width: '100%', height: '360px', marginLeft: 'auto', marginRight: 'auto', objectFit: 'contain'}} variant="top" src={process.env.REACT_APP_IMG_URL + data.image} />
                    ) : (
                        <Card.Img class='scale' variant="top" src={process.env.REACT_APP_IMG_URL + data.image} />
                    )}
                    <Card.Body style={{height: 100, overflow: 'hidden', textAlign: 'center'}}>
                        <strong style={{color: 'black'}}>{data.name}</strong>
                        <p color='black'>{data.price} тг.</p>
                    </Card.Body>
                </Card>
                </Link>
        </Col>

    )
}

export default ProductItem
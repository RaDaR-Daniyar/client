import { Card, Col } from 'react-bootstrap'
import './navigation/style.css'
import { Link } from 'react-router-dom'

const ProductItem = ({ data }) => {
    return (
        <Col xl={3} lg={4} sm={3} style={{marginBottom: 10}} >
            <Link to={`/product.html/${data.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{width: '100%', height: '340px', objectFit: 'contain', cursor: 'pointer', position: 'relative'}}>
                    {data.finId ? <div style={{
                        right: '5px',
                        padding: '0px 7px',
                        position: 'absolute',
                        border: '1px solid #1200ba',
                        borderRadius: '25px',
                        color: '#1200ba',
                        background: '#fff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        fontFamily: 'Times New Roman',
                        zIndex: '10'
                    }}>-{data.finId}%</div> : ''}
                    {data.image ? (
                        <Card.Img class='scale' style={{width: '100%', height: '270px', marginLeft: 'auto', marginRight: 'auto', objectFit: 'contain'}} variant="top" src={process.env.REACT_APP_IMG_URL + data.image} />
                    ) : (
                        <Card.Img class='scale' variant="top" src={process.env.REACT_APP_IMG_URL + data.image} />
                    )}
                    <Card.Body style={{height: 100, overflow: 'hidden', textAlign: 'center', color: '#1200ba'}}>
                        <strong style={{fontFamily: 'Book Antiqua', fontSize: 14}}>{data.name}</strong>
                        <p style={{fontFamily: 'Book Antiqua', fontSize: 14}}>{data.price} тг.</p>
                    </Card.Body>
                </Card>
                </Link>
        </Col>

    )
}

export default ProductItem
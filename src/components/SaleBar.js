import {Form} from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from './AppContext.js'
import { observer } from 'mobx-react-lite'
import { useNavigate, createSearchParams } from 'react-router-dom'

const SaleBar = observer(() => {
    const { catalog } = useContext(AppContext);
    const navigate = useNavigate();

    const handleClick = (bool) => {

        // change sale target
        if (bool) {
            catalog.sale = true;
        } else {
            catalog.sale = null;
        }

        // change url params
        const params = {}
        if (catalog.category) params.category = catalog.category
        if (catalog.brand) params.brand = catalog.brand
        if (catalog.mehanizm) params.mehanizm = catalog.mehanizm
        if (catalog.gender) params.gender = catalog.gender
        if (catalog.shape) params.shape = catalog.shape
        if (catalog.material) params.material = catalog.material
        if (catalog.glass) params.glass = catalog.glass
        if (catalog.strap) params.strap = catalog.strap
        if (catalog.power) params.power = catalog.power
        if (catalog.water) params.water = catalog.water
        if (catalog.brend) params.brend = catalog.brend
        if (catalog.page > 1) params.page = catalog.page
        if (catalog.sale) params.sale = true
        navigate({
            pathname: '/shop.html',
            search: '?' + createSearchParams(params),
        });

    }

    return (
        <Form.Label style={{display: "flex", cursor: "pointer"}}>
            <Form.Check  style={{ marginRight: "10px", marginTop: "10px", fontFamily: 'Book Antiqua'}} onChange={event => {
                handleClick(event.target.checked);
            }}>
            </Form.Check>
            <a  style={{ marginTop: "10px", fontFamily: 'Book Antiqua'}}>Товары со скидкой</a>
        </Form.Label>
    )
});

export default SaleBar;
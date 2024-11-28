import {Form} from 'react-bootstrap'
import {useContext} from 'react'
import {AppContext} from './AppContext.js'
import {observer} from 'mobx-react-lite'
import {useNavigate, createSearchParams} from 'react-router-dom'

const MehanizmBar = observer(() => {
    const {catalog} = useContext(AppContext)
    const navigate = useNavigate()

    const handleClick = (id) => {
        if (id === catalog.mehanizm) {
            catalog.mehanizm = null
        } else {
            catalog.mehanizm = id
        }
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
        navigate({
            pathname: '/shop.html',
            search: '?' + createSearchParams(params),
        })
    }

    return (
        <Form.Select onChange={event => {
            handleClick(Number(event.target.value))
        }}>
            <option>Тип механизма</option>
            {catalog.mehanizms.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </Form.Select>
    )
})

export default MehanizmBar

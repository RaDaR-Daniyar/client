import {Form} from 'react-bootstrap'
import {useContext} from 'react'
import {AppContext} from './AppContext.js'
import {observer} from 'mobx-react-lite'
import {useNavigate, createSearchParams} from 'react-router-dom'

const BrendBar = observer(() => {
    const { catalog } = useContext(AppContext)
    const navigate = useNavigate()

    const handleClick = (id) => {
        if (id === catalog.brend) {
            catalog.brend = null
        } else {
            catalog.brend = id
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
            pathname: '/shop',
            search: '?' + createSearchParams(params),
        })
    }

    return (
        <Form.Select aria-label="Label" value={catalog.brend} placeholder="Бренд" onChange={event => {
            handleClick(Number(event.target.value))
        }}>
            <option>Тип</option>
            {catalog.brends.map(brend => <option selected={catalog.brend === brend.id} value={brend.id} key={brend.id}>{brend.name}</option>)}
        </Form.Select>
    )
})

export default BrendBar

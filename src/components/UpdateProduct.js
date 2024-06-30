import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { fetchOneProduct, updateProduct, fetchCategories, fetchBrands, fetchMehanizms, fetchGenders, fetchShapes,
    fetchMaterials, fetchGlasses, fetchStraps, fetchPowers, fetchWaters, fetchBrends
} from '../http/catalogAPI.js'
import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import UpdateProperties from './UpdateProperties.js'
import { createProperty, updateProperty, deleteProperty } from '../http/catalogAPI.js'

const defaultValue = {name: '', price: '', category: '', brand: '', mehanizm: '', gender: '', shape: '', material: '', glass: '', strap: '', power: '', water: '', brend: '', sale: '', kaspi: ''}
const defaultValid = {name: null, price: null, category: null, brand: null, mehanizm: null, gender: null, shape: null,
    material: null, glass: null, strap: null, power: null, water: null, brend: null, kaspi: null
}

const isValid = (value) => {
    const result = {}
    const pattern = /^[1-9][0-9]*$/;
    for (let key in value) {
        if (key === 'name') result.name = value.name.trim() !== ''
        if (key === 'price') result.price = pattern.test(value.price.trim())
        if (key === 'category') result.category = pattern.test(value.category)
        if (key === 'brand') result.brand = pattern.test(value.brand)
        if (key === 'mehanizm') result.mehanizm = pattern.test(value.mehanizm)
        if (key === 'gender') result.gender = pattern.test(value.gender)
        if (key === 'shape') result.shape = pattern.test(value.shape)
        if (key === 'material') result.material = pattern.test(value.material)
        if (key === 'glass') result.glass = pattern.test(value.glass)
        if (key === 'strap') result.strap = pattern.test(value.strap)
        if (key === 'power') result.power = pattern.test(value.power)
        if (key === 'water') result.water = pattern.test(value.water)
        if (key === 'brend') result.brend = pattern.test(value.brend)
        if (key === 'sale') result.sale = (pattern.test(value.sale) && 0 <= value.sale && value.sale <= 100) || value.sale === '0';
        if (key === 'kaspi') result.kaspi = value.kaspi.trim() !== ''
    }
    return result;
}

const updateProperties = async (properties, productId) => {
    for (const prop of properties) {
        const empty = prop.name.trim() === '' || prop.value.trim() === ''
        if (empty && prop.id) {
            try {
                await deleteProperty(productId, prop)
            } catch(error) {
                alert(error.response.data.message)
            }
            continue
        }
        if (prop.append && !empty) {
            try {
                await createProperty(productId, prop)
            } catch(error) {
                alert(error.response.data.message)
            }
            continue
        }
        if (prop.change && !prop.remove) {
            try {
                await updateProperty(productId, prop.id, prop)
            } catch(error) {
                alert(error.response.data.message)
            }
            continue
        }
        if (prop.remove) {
            try {
                await deleteProperty(productId, prop.id)
            } catch(error) {
                alert(error.response.data.message)
            }
            continue
        }
    }
}

const UpdateProduct = (props) => {
    const { id, show, setShow, setChange } = props


    const [value, setValue] = useState(defaultValue)
    const [valid, setValid] = useState(defaultValid)
    const [categories, setCategories] = useState(null)
    const [brands, setBrands] = useState(null)
    const [mehanizms, setMehanizms] = useState(null)
    const [genders, setGenders] = useState(null)
    const [shapes, setShapes] = useState(null)
    const [materials, setMaterials] = useState(null)
    const [glasses, setGlasses] = useState(null)
    const [straps, setStraps] = useState(null)
    const [powers, setPowers] = useState(null)
    const [waters, setWaters] = useState(null)
    const [brends, setBrends] = useState(null)
    const [image, setImage] = useState(null)
    const [properties, setProperties] = useState([])
    
    useEffect(() => {
        if(id) {
            fetchOneProduct(id)
                .then(
                    data => {
                        const prod = {
                            name: data.name,
                            price: data.price?.toString(),
                            category: data.categoryId?.toString(),
                            brand: data.brandId?.toString(),
                            mehanizm: data.mehanizmId?.toString(),
                            gender: data.genderId?.toString(),
                            shape: data.shapeId?.toString(),
                            material: data.materialId?.toString(),
                            glass: data.glassId?.toString(),
                            strap: data.strapId?.toString(),
                            power: data.powerId?.toString(),
                            water: data.waterId?.toString(),
                            brend: data.brendId?.toString(),
                            sale: data.finId?.toString(),
                            kaspi: data.silka.toString()
                        }
                        setValue(prod)
                        setValid(isValid(prod))
                        setProperties(data.props?.map(item => {
                            return {...item, unique: uuid(), append: false, remove: false, change: false}
                        }))
                    }
                )
                .catch(
                    error => alert(error.response.data.message)
                )
            fetchCategories()
                .then(
                    data => setCategories(data)
                )
            fetchBrands()
                .then(
                    data => setBrands(data)
                )
            fetchMehanizms()
                .then(
                    data => setMehanizms(data)
                )
            fetchGenders()
                .then(
                    data => setGenders(data)
                )
            fetchShapes()
                .then(
                    data => setShapes(data)
                )
            fetchMaterials()
                .then(
                    data => setMaterials(data)
                )
            fetchGlasses()
                .then(
                    data => setGlasses(data)
                )
            fetchStraps()
                .then(
                    data => setStraps(data)
                )
            fetchPowers()
                .then(
                    data => setPowers(data)
                )
            fetchWaters()
                .then(
                    data => setWaters(data)
                )
            fetchBrends()
                .then(
                    data => setBrends(data)
                )
        }
    }, [id])

    const handleInputChange = (event) => {
        const data = {...value, [event.target.name]: event.target.value}
        setValue(data)
        setValid(isValid(data))
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0])
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const correct = isValid(value)
        setValid(correct)
        
        if (correct.name && correct.price && correct.brand) {
            const data = new FormData();
            data.append('name', value.name.trim())
            data.append('price', value.price.trim())
            data.append('kaspi', value.kaspi.trim());

            if (correct.brand) {
                data.append('brandId', value.brand);
            }
            else if (value.mehanizm === '') {
                data.append('brandId', null);
            };
            if (correct.mehanizm){
                data.append('mehanizmId', value.mehanizm);
            }
            else if (value.mehanizm === '') {
                data.append('mehanizmId', null);
            };
            if (correct.gender) {
                data.append('genderId', value.gender);
            }else if (value.mehanizm === '') {
                data.append('genderId', null);
            };
            if (correct.shape) {
                data.append('shapeId', value.shape);
            }else if (value.mehanizm === '') {
                data.append('shapeId', null);
            }
            if (correct.material) {
                data.append('materialId', value.material);
            }else if (value.mehanizm === '') {
                data.append('materialId', null);
            };
            if (correct.glass) {
                data.append('glassId', value.glass);
            }else if (value.mehanizm === '') {
                data.append('glassId', null);
            };
            if (correct.strap) {
                data.append('strapId', value.strap);
            }else if (value.mehanizm === '') {
                data.append('strapId', null);
            }
            if (correct.power) {
                data.append('powerId', value.power);
            }else if (value.mehanizm === '') {
                data.append('powerId', null);
            };
            if (correct.water) {
                data.append('waterId', value.water);
            }else if (value.mehanizm === '') {
                data.append('waterId', null);
            }
            if (correct.brend) {
                data.append('brendId', value.brend);
            }
            if (correct.sale) {
                data.append('finId', value.sale);
            }
            if (image) data.append('image', image, image.name)
            if (properties.length) {
                const props = properties.filter(
                    prop => prop.name.trim() !== '' && prop.value.trim() !== ''
                )
                if (props.length) {
                    data.append('props', JSON.stringify(props))
                }
            }

            if (properties.length) {
                await updateProperties(properties, id)
            }

            updateProduct(id, data)
                .then(
                    data => {

                        event.target.image.value = ''
                        const prod = {
                            name: data.name,
                            price: data.price.toString(),
                            // brand: data.brandId?.toString(),
                            // category: data.categoryId?.toString(),
                            // mehanizm: data.mehanizmId?.toString(),
                            // gender: data.genderId.toString(),
                            // shape: data.shapeId?.toString(),
                            // material: data.materialId?.toString(),
                            // glass: data.glassId?.toString(),
                            // strap: data.strapId?.toString(),
                            // power: data.powerId?.toString(),
                            // water: data.waterId?.toString(),
                            brend: data.brendId?.toString()
                        }
                        if (data.categoryId) prod.category = data.categoryId.toString();
                        if (data.mehanizmId) prod.mehanizm = data.mehanizmId.toString();
                        if (data.brandId) prod.brand = data.brandId.toString();
                        if (data.genderId) prod.gender = data.genderId.toString();
                        if (data.shapeId) prod.shape = data.shapeId.toString();
                        if (data.glassId) prod.glass = data.glassId.toString();
                        if (data.strapId) prod.strap = data.strapId.toString();
                        if (data.powerId) prod.power = data.powerId.toString();
                        if (data.waterId) prod.water = data.waterId.toString();
                        if (data.materialId) prod.material = data.materialId.toString();
                        if (data.finId) prod.sale = data.finId.toString();
                        if (data.kaspi) prod.kaspi = data.silka.toString();
                        setValue(prod)
                        setValid(isValid(prod))
                        setProperties(data.props.map(item => {
                            return {...item, unique: uuid(), append: false, remove: false, change: false}
                        }))
                        setShow(false)
                        setChange(state => !state)
                    }
                )
                .catch(
                    error => {debugger; alert(error.response.data.message)}
                )
        }
    }

    return (
        <Modal show={show} onHide={() => setShow(false)} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Редактирование товара</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Control
                        name="name"
                        value={value.name}
                        onChange={e => handleInputChange(e)}
                        isValid={valid.name === true}
                        isInvalid={valid.name === false}
                        placeholder="Название товара..."
                        className="mb-3"
                    />
                    <Row className="mb-3">
                        <Col>
                            <Form.Select
                                name="brand"
                                value={value.brand}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.brand === true}
                                isInvalid={valid.brand === false}
                            >
                                <option value="">Бренд</option>
                                {brands && brands.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="mehanizm"
                                value={value.mehanizm}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.mehanizm === true}
                            >
                                <option value="">Тип механизма</option>
                                {mehanizms && mehanizms.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="gender"
                                value={value.gender}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.gender === true}
                            >
                                <option value="">Пол</option>
                                {genders && genders.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Select
                                name="shape"
                                value={value.shape}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.shape === true}
                            >
                                <option value="">Форма корпуса</option>
                                {shapes && shapes.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="material"
                                value={value.material}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.material === true}
                            >
                                <option value="">Материал корпуса</option>
                                {materials && materials.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="glass"
                                value={value.glass}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.glass === true}
                            >
                                <option value="">Стекло</option>
                                {glasses && glasses.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Select
                                name="strap"
                                value={value.strap}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.strap === true}
                            >
                                <option value="">Материал браслета/ремешка</option>
                                {straps && straps.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="power"
                                value={value.power}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.power === true}
                            >
                                <option value="">Запаса хода</option>
                                {powers && powers.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="water"
                                value={value.water}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.water === true}
                            >
                                <option value="">Водонепроницаемость</option>
                                {waters && waters.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Control
                                name="price"
                                value={value.price}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.price === true}
                                isInvalid={valid.price === false}
                                placeholder="Цена товара..."
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                name="sale"
                                value={value.sale}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.sale === true}
                                placeholder='Скидка(%)'
                            />
                        </Col>
                        <Col>
                            Цена без скидки: {Math.ceil(value.price * 100 / (100 - (value.sale? value.sale: 0) ))}
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs={4}>
                            <Form.Select
                                name="brend"
                                value={value.brend}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.brend === true}
                            >
                                <option value="">Тип товара</option>
                                {brends && brends.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Control
                                name="image"
                                type="file"
                                onChange={e => handleImageChange(e)}
                                placeholder="Фото товара..."
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12}>
                            <Form.Control
                                name="kaspi"
                                value={value.kaspi}
                                onChange={e => handleInputChange(e)}
                                placeholder='Ссылка на kaspi'
                            />                            
                        </Col>
                    </Row>
                    <UpdateProperties properties={properties} setProperties={setProperties} />
                    <Row>
                        <Col>
                            <Button type="submit">Сохранить</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UpdateProduct
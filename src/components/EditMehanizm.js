import { Modal, Button, Form } from 'react-bootstrap'
import { createMehanizm, fetchMehanizm, updateMehanizm } from '../http/adminAPI.js'
import { useState, useEffect } from 'react'

const EditMehanizm = (props) => {
    const { id, show, setShow, setChange } = props

    const [name, setName] = useState('')
    const [valid, setValid] = useState(null)

    useEffect(() => {
        if(id) {
            fetchMehanizm(id)
                .then(
                    data => {
                        setName(data.name)
                        setValid(data.name !== '')
                    }
                )
                .catch(
                    error => alert(error.response.data.message)
                )
        } else {
            setName('')
            setValid(null)
        }
    }, [id])

    const handleChange = (event) => {
        setName(event.target.value)
        setValid(event.target.value.trim() !== '')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const correct = name.trim() !== ''
        setValid(correct)
        if (correct) {
            const data = {
                name: name.trim()
            }
            const success = (data) => {
                setShow(false)
                setChange(state => !state)
            }
            const error = (error) => alert(error.response.data.message)
            id ? updateMehanizm(id, data).then(success).catch(error) : createMehanizm(data).then(success).catch(error)
        }
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{id ? 'Редактирование' : 'Создание'} типа механизма</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Control
                        name="name"
                        value={name}
                        onChange={e => handleChange(e)}
                        isValid={valid === true}
                        isInvalid={valid === false}
                        placeholder="Название типа механизма..."
                        className="mb-3"
                    />
                    <Button type="submit">Сохранить</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EditMehanizm
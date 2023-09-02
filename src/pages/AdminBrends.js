import { useState, useEffect } from 'react'
import { fetchBrends, deleteBrend } from '../http/adminAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditBrend from '../components/EditBrend.js'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const AdminBrends = () => {
    const [brends, setBrends] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [brendId, setBrendId] = useState(0)

    const handleCreateClick = () => {
        setBrendId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setBrendId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteBrend(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Бренд «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchBrends()
            .then(
                data => setBrends(data)
            )
            .finally(
                () => setFetching(false)
            )
    }, [change])

    if (fetching) {
        return <Spinner animation="border" />
    }

    return (
        <Container>
            <Helmet>
                <title>Добавить тип товара для ручек и ножей - Aksessuary/KZ</title>
            </Helmet>
            <h1>Типы товаров</h1>
            <Button onClick={() => handleCreateClick()}>Создать тип товара</Button>
            <EditBrend id={brendId} show={show} setShow={setShow} setChange={setChange} />
            {brends.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {brends.map(item => 
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <Button variant="success" size="sm" onClick={() => handleUpdateClick(item.id)}>
                                    Редактировать
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(item.id)}>
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
                </Table>
            ) : (
                <p>Список брендов пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminBrends
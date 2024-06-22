import { Button } from 'react-bootstrap'

const BasketItem = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td style={{whiteSpace: 'nowrap'}}>
                <Button size="sm" onClick={() => props.decrement(props.id)}>-</Button>
                {' '}<strong>{props.quantity}</strong>{' '}
                <Button size="sm" onClick={() => props.increment(props.id)}>+</Button>
            </td>
            <td>{props.price} тг.</td>
            <td>{props.price * props.quantity} тг.</td>
            <td class='hide-on-mobile'>
                <Button variant="link" onClick={() => props.remove(props.id)} style={{marginLeft: '-10px'}}>
                    Удалить
                </Button>
            </td>
        </tr>
    );
}

export default BasketItem
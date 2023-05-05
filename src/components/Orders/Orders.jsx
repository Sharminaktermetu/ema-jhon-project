
import './Orders.css'
const Orders = (props) => {
    return (
        <div className="orders">
        <h3>Order summery</h3>
        <strong>Selected Items: {props.cart.length}</strong>

        </div>
    );
};

export default Orders;
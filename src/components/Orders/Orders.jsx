
import './Orders.css'
const Orders = ({cart}) => {
  
    let total =0;
    let totalShipping= 0;
    let quantity =0;
    for(const product of cart){
        product.quantity= product.quantity||1
        total=total+product.price*product.quantity;
        totalShipping=totalShipping+product.shipping;
        quantity =quantity+product.quantity
    }
    const tax = total*7/100;
    const grand =total+totalShipping+tax;
    return (
        <div className="orders">
        <h3>Order summery</h3>
        <strong>Selected Items: {quantity}</strong>
        <p>Total price: ${total}</p>
        <p>Total shipping:${totalShipping}</p>
        <p>Tax:${tax}</p>
        <h4>Grand total:{grand.toFixed(2)}</h4>
        </div>
    );
};

export default Orders;
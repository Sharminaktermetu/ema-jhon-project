
import './Orders.css'
const Orders = ({cart}) => {
  
    let total =0;
    let totalShipping= 0;
    for(const product of cart){
        total=total+product.price;
        totalShipping=totalShipping+product.shipping
    }
    const tax = total*7/100;
    const grand =total+totalShipping+tax;
    return (
        <div className="orders">
        <h3>Order summery</h3>
        <strong>Selected Items: {cart.length}</strong>
        <p>Total price: ${total}</p>
        <p>Total shipping:${totalShipping}</p>
        <p>Tax:${tax}</p>
        <h4>Grand total:{grand.toFixed(2)}</h4>
        </div>
    );
};

export default Orders;
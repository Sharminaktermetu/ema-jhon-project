import './Product.css'

const Product = (props) => {

const {name,id,img,price,seller,ratings}=props.product;

const addToCart =props.addToCart;
    return (
        <div className='single-product'>
            
            <img  src={img} alt=""  width="200px"/>
            <div className='product-info'>
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={addToCart} className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;
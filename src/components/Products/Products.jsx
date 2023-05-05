import { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Orders from '../Orders/Orders';

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const [cart, setCart]=useState([])
    const addToCart=(product)=>{
        const newCart = [...cart,product];
        setCart(newCart)
    }
    return (
        <div className="products">
            <div className='cards'>
                {
                    products.map(product=><Product 
                        key={product.id}
                        addToCart={addToCart}
                         product={product}>

                         </Product>)
                }
            </div>
            <div style={{background:'lightblue'}}>
                <Orders cart={cart}></Orders>
            </div>
        </div>
    );
};

export default Products;
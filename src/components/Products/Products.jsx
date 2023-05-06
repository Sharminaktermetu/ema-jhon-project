import { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Orders from '../Orders/Orders';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Products = () => {
    const [products,setProducts]=useState([]);
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    
    const addToCart=(product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }

    useEffect(()=>{
        const savedCart =[]
        const storedCart = getShoppingCart()
        for(const id in storedCart){
          
           const savedProduct = products.find(product=>product.id === id);   
        if(savedProduct){
            const quantity=storedCart[id];
            savedProduct.quantity=quantity;
            savedCart.push(savedProduct)
        }
        console.log(savedProduct);
        }

        setCart(savedCart)
    },[products])
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
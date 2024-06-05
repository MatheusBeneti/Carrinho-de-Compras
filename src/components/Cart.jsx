import React, { useEffect, useState } from "react";
import ProductInCart from "./ProductInCart";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem('productsInCart');
        if (localStorageData) {
            setProducts(JSON.parse(localStorageData));
        }
    }, []);

    const removeFromCart = (productName) => {
        const updatedProducts = products.filter(product => product.name !== productName);
        setProducts(updatedProducts);
        localStorage.setItem('productsInCart', JSON.stringify(updatedProducts));
        // Mostrar feedback visual
        toast.info(`${productName} foi removido do carrinho!`);
    };

    if (products.length === 0) {
        return <div className="empty-cart"><h1>Carrinho Vazio</h1></div>;
    } else {
        return (
            <div className="productList">
                {products.map((product, index) => (
                    <ProductInCart 
                        key={index} 
                        product={product} 
                        removeFromCart={removeFromCart} 
                    />
                ))}
            </div>
        );
    }
};

export default Cart;

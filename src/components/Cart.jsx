import { useEffect, useState } from "react";
import ProductInCart from "./ProductInCart";

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
    };

    if (products.length === 0) {
        return <h1>Carrinho Vazio</h1>;
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

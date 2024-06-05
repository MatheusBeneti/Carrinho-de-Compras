import { useState, useEffect } from "react";
import Product from "../components/Product"

// Simulação de dados recebidos por uma requisição
import productsData from "../data/products_mock.json"

const ProductsList = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        // Em um cenário real, requisição para uma API seria feita aqui
        setProducts(productsData);
    }, []);

    return (
        <div className="productList">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsList
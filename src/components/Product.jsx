import React, { useState } from "react";

const Product = ({ product }) => {

    const [quantity, setQuantity] = useState(1); // Estado local para controlar a quantidade selecionada

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value)); // Atualiza a quantidade selecionada quando o usuário muda a opção
    };

    const addToCart = () => {
        // Obter os dados existentes do localStorage
        let localStorageData = JSON.parse(localStorage.getItem('productsInCart')) || [];

        // Dados do produto atual
        const productData = {
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity 
        };

        localStorageData.push(productData)
        localStorage.setItem('productsInCart', JSON.stringify(localStorageData))
        
    };
    

    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>R${product.price}</p>
            <div className="cart-buttons">
                <select name="quantity" id="quantity" value={quantity} onChange={handleQuantityChange}>
                    {/* Opções de quantidade */}
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* Adicione mais opções conforme necessário */}
                </select>
                <button onClick={addToCart}>Adicionar ao carrinho</button>
            </div>
        </div>
    );
};

export default Product;

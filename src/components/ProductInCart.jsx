const ProductInCart = ({ product, removeFromCart }) => {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>Quantidade: {product.quantity}</p>
            <div className="centralized">
                <button id="remove-button"onClick={() => removeFromCart(product.name)}>Remover</button>
            </div>
        </div>
    );
};

export default ProductInCart;

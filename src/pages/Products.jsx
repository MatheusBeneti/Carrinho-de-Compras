import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductList"

const Products = () => {
    return (
        <>
            <NavBar/>
                <main>
                    <ProductsList/>
                </main>
        </>
    );
};

export default Products;

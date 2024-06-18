import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active-link' : '')} 
                        to="/Carrinho-de-Compras" 
                        end 
                    >
                        Produtos
                    </NavLink>
                </li> 
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active-link' : '')} 
                        to='/Carrinho-de-Compras/ShoppingCart'
                    >
                        Carrinhos de compras
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;

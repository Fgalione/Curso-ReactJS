

import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <strong>Santa Fulana<img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-dove-origami-icongeek26-flat-icongeek26.png"/></strong>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse">
                <Categorias/>
            </div>
                <CartWidget/>
        </div>
        </nav>

    );
};

export default Navbar;

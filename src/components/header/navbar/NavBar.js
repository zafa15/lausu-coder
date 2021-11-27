import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container-fluid">
                <a className="logo text-uppercase" href="/#" onClick={(e) => e.preventDefault()}>
                        <img src="https://lausutec.com/wp-content/uploads/2021/05/lausutec-svg.svg" alt="" className="logo-light" height="40" />
                </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto navbar-center" id="mySidenav">
                            <li className="nav-item active">
                                <a href="#Inicio" className="nav-link">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Nosotros" className="nav-link">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Contacto" className="nav-link">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Productos" className="nav-link">Productos</a>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <button className="btn navbar-btn navbar-login">Login</button>
                            <CartWidget count={5}/>
                        </div>
                    </div>
            </div>
        </nav>
    );
}

export default NavBar;
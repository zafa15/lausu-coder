import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container-fluid">
                <a className="logo text-uppercase" href="#">
                        <img src="https://lausutec.com/wp-content/uploads/2021/05/lausutec-svg.svg" alt="" className="logo-light" height="40" />
                </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto navbar-center" id="mySidenav">
                            <li className="nav-item active">
                                <a href="#" className="nav-link">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Productos</a>
                            </li>
                        </ul>
                        <button className="btn navbar-btn navbar-login">Login</button>
                    </div>
            </div>
        </nav>
    );
}

export default NavBar;
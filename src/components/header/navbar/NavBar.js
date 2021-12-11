import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../../../Services/products';

const NavBar = () => {

    const [category,setCategory] = useState([])

    useEffect(() =>{
        const cat = getCategories()
        cat.then(i => {
            setCategory(i)
        }).catch(error => {
            console.log(error) 
        })

        return(()=>{
            setCategory([])
        })
    },[])

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container-fluid">
                <Link className="logo text-uppercase" to={`/`}>
                        <img src="https://lausutec.com/wp-content/uploads/2021/05/lausutec-svg.svg" alt="" className="logo-light" height="40" />
                </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto navbar-center" id="mySidenav">
                            <li className="nav-item" key={'all'}>
                                <Link to={`/`} className="nav-link">Productos</Link>
                            </li>
                            
                            {
                                Array.isArray(category) ? (
                                    category.map(e =>
                                        <li className="nav-item" key={e.id}>
                                            <NavLink to={`/category/${e.name}`} key={`link-${e.id}`} className="nav-link" activeClassName='nav-active'>{e.name}</NavLink>
                                        </li>
                                    )
                                ) : (
                                    ''
                                )
                            }
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
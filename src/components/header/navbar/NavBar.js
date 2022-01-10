import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getCategories} from '../../../Services/firebase'


const NavBar = () => {

    const [category,setCategory] = useState([])

    useEffect(() =>{
        getCategories().then(categories => {
            setCategory(categories);
        }).catch((error)=>{
            console.log('Error searching Categories', error)
        });
        return(()=>{
            setCategory([])
        })
    },[])

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container-fluid">
                <Link className="logo text-uppercase" to={`/`}>
                        <img src="https://scontent.flim10-1.fna.fbcdn.net/v/t1.6435-9/152351390_102233155254785_7448606761380941155_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=BL8k41W9UnYAX-lITYT&tn=XoaAto2qE90GLvhx&_nc_ht=scontent.flim10-1.fna&oh=00_AT839JH8f-fc-nrPL0Pcjog-LP-_zoIxKwoLjCsKy7ZN2A&oe=6201BA97" alt="" className="logo-light" height="40" />
                </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto navbar-center" id="mySidenav">
                            <li className="nav-item" key={'all'}>
                                <Link to={`/`} className="nav-link">Todos</Link>
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
                            <CartWidget/>
                        </div>
                    </div>
            </div>
        </nav>
    );
}

export default NavBar;
/* import { useState } from 'react'; */
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({elements}) =>{


    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card item--card">
                <div className="card-body">
                    <div className="item--media">
                        <center>
                            <img src={elements.img_url} alt={elements.name}/>
                        </center>
                    </div>
                    <div className="item--detail mt-4 mb-3" align="left">
                        <h4 className="mt-0 mb-3"><strong>{elements.name}</strong></h4>
                        <p className="mt-0 mb-0">{elements.description}</p>
                        {
                            elements.stock === 0 ? (
                                <p className='txt-danger mt-3 mb-0' align="center"><strong>No tenemos en Stock</strong></p>
                            ) : ('')
                        }
                    </div>
                    <div className="item--add">
                        <Link to={`/item/${elements.id}`} className="go-to-detail"><u>Ver Detalle</u></Link>
                        {/* <button type="button" className="btn btn-add-item mt-3" onClick={() => onAdd()}>
                            <i className="mdi mdi-cart-outline mr-2"></i>Agregar al carrito
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
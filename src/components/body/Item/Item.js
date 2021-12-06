/* import { useState } from 'react'; */
import './Item.css'

const Item = ({elements}) =>{

    const onAdd = () => {
        console.log('Hola');
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card item--card">
                <div className="card-body">
                    <div className="item--media">
                        <center>
                            <img src={elements.thumbnail} alt={elements.title}/>
                        </center>
                    </div>
                    <div className="item--detail mt-4" align="left">
                        <h4 className="mt-0 mb-3"><strong>{elements.title}</strong></h4>
                        <p className="mt-0 mb-0">{elements.description}</p>
                    </div>
                    <div className="item--add">
                        <a href="view-detail.php" className="go-to-detail"><u>Ver Detalle</u></a>
                        <button type="button" className="btn btn-add-item mt-3" onClick={() => onAdd()}>
                            <i className="mdi mdi-cart-outline mr-2"></i>Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
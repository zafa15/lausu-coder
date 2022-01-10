import { Link } from 'react-router-dom'
import './CompleteBuy.css'

const CompleteBuy = ({order}) =>{
    return(
        <div className="box--completeBuy" align="center">
            <img src={process.env.PUBLIC_URL + '/checked.png'} alt="ícono de check" className="checked--media mb-3"/>
            <div>
                <h3>
                    Tu Orden fue enviada Correctamente.
                </h3>
                <p>
                    <strong>El código de tu Orden es: {order}</strong>
                </p>
                <p>
                    <Link to={`/`}><u>Puedes ir a ver más productos</u></Link>
                </p>
            </div>
        </div>
    )
}

export default CompleteBuy
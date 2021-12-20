import './Notification.css'
import { useContext } from "react"
import NotificationContext from '../../context/NotificationContext'

const Notification = () => {
    const {notification, setNotification} = useContext(NotificationContext)
    if(notification.message === ''){
        return null
    }

    return(
        <div className={notification.severity === 'error' ? 'alert alert-danger' : 'alert alert-success'} onClick={() => setNotification('success','') }>
            {notification.message}
        </div>
    )
}

export default Notification
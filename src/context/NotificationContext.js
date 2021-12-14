import React, {useState} from "react";

const Context = React.createContext()

export const NotificationContextProvider = ({children}) => {
    const [message,setMessage] = useState('')
    const [severity,setSeverity] = useState('')

    const setNotification = (severity,message) => {
        setMessage(message)
        setSeverity(severity)
    }


    return (
        <Context.Provider value={{
            notification: {
                message,
                severity
            },
            setNotification
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
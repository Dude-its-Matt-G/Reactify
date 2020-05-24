import React, { useState } from "react"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    console.log("context")

    const [appStorage, setStorage] = useState(
        {
            artist:[],
            albums:[]
        }
    )
    
    return (
        <AppContext.Provider value={[appStorage, setStorage]}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
export { AppProvider }
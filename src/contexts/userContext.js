import React , { useState } from 'react';

const contextUser = React.createContext()

export function UserContextProvider ({ children }){

    const [user, setUser] = useState(false)

    return (
        <contextUser.Provider value={{ user , setUser }}>
            { children }    
        </contextUser.Provider>
    )
    
}
export default contextUser;
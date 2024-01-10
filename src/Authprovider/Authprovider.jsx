import React, { createContext, useState } from 'react';


export const Authcontex = createContext('')
const Authprovider = ({children}) => {

    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)


    const authinfo = {
        user,
        loading
    }
    return (
        <Authcontex.Provider value={authinfo}>
            {children}
        </Authcontex.Provider>
    );
};

export default Authprovider;
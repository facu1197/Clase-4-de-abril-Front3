import React, {createContext, useState} from "react";

export const NewContext = createContext({});

const NewContextProvider = ({children}) => {
    const [isLogged , setIsLogged] = useState(false);

    const handleLogin = () => {
        setIsLogged(true);
    }

    const propiedades = {
        isLogged,
        handleLogin
    }

    return(
        <NewContext.Provider value={propiedades}>
            {children}
        </NewContext.Provider>
    )
}

export default NewContextProvider;
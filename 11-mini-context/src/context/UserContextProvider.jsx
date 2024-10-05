import React from "react";
import UserContext from "./UserContext";

//~ 2 creating a provider

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)        //* do fetch, other logic

    return(
        <>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )

}


export default UserContextProvider
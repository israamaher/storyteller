import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }){
    const [currentUser, setCurrentUser] =useState();
    const [loading , setLoading] = useState(true);

    return(
        <AuthContext.Provider value={{ currentUser}}> 
            {!loading && children}
        </AuthContext.Provider>

    );

}

export default AuthProvider;
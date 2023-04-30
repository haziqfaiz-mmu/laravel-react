import {createContext, useContext, useState} from "react";

const StateContext  = createContext({
    user: null,
    token: null,
    setUser: ()=>{},
    settoken: ()=>{}

});

export const ContextProvider = ({children}) =>{
    const[user,setUser] = useState({});
    const[token,_setToken] = useState(localStorage.getItem('ACCESS TOKEN'));

    const setToken = (token)=> {
        _setToken(token);
        if(token){
            localStorage.setItem('ACCESS TOKEN',token);
        }
        else{
            localStorage.removeItem('ACCESS TOKEN');
        }
    }
    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
            </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

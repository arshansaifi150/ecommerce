import React, { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { useLocation,Navigate } from "react-router-dom";

const RequiredAuth = ({children})=>{
    const authContext = useContext(AuthContext)
    const location = useLocation()
    const token = localStorage.getItem("token")
    console.log(token)
    if(token === null && authContext.token === null){
        return <Navigate to="/login" state={{from:location}} replace={true} />
    }
    return children
}

export default  RequiredAuth;

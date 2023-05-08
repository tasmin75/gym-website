import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
    const history = useNavigate();
    let login = JSON.parse(localStorage.getItem("isLogin"));
    useEffect(()=>{
        if (!login) {
            history("/Login");
        } 
    },[])
    

    return (
        <div>
            <props.Cmp />
        </div>
    );
}
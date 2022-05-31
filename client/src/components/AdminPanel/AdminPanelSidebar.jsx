import React from "react";
import { NavLink } from "react-router-dom";


export default function AdminPanelSideBar(){
    return(
        <><div>Holis soy una sidebar jajaj</div>
        
        <span>

            <NavLink to='/cartypecreate'> Agregar auto a stock </NavLink>
            <NavLink to='/carcreate'> Crear un auto </NavLink>
            <NavLink to='/locationcreate'> Crear una locacion </NavLink>



        </span></>

    )
}
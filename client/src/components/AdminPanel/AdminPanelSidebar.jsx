import React from "react";
import { NavLink } from "react-router-dom";
import {Button} from '@mui/material';  


export default function AdminPanelSideBar(){
    return(
        <>
        {/* <div>Holis soy una sidebar jajaj</div> */}
        
        <span style={{display: "flex", "flex-direction": "column", "align-items": "center"}}>


            <NavLink to='/cartypecreate'><Button variant='contained'>Crear un tipo auto</Button>  </NavLink>
            <NavLink to='/carcreate'><Button variant='contained'>Agregar auto a stock</Button>  </NavLink>
            <NavLink to='/locationcreate'> <Button variant='contained'>Crear una locacion</Button> </NavLink>



        </span></>

    )
}
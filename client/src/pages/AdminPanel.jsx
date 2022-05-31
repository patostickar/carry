import React from "react";

import AdminPanelSideBar from "../components/AdminPanel/AdminPanelSidebar";



// ESTE COMPONENTE solo se utiliza para renderizar los formularios de admin, no necesariamente sera el panel de admin


export default function AdminPanel(){
    return (
        <div>
            panel del administrador

            <AdminPanelSideBar />
            
           
            
        </div>
    
    )
}
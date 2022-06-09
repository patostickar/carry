
import {React,  } from "react";
import { styled } from '@mui/material/styles';

import DashboardApp from "./AdminPages/Dashboard";
import DashboardSidebar from "./AdminPages/AdminComponents/sections/layouts/DashboardSidebar";
import Navbar from "../Navbar";



 // import AdminPanelSideBar from "./AdminPanelSidebar";


 
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 0;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
   
    
  });

  

  const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }));
  
  




export default function AdminCard(){

   
      



    return(
        

            <>
            <RootStyle>

            
            <DashboardSidebar />
            
            
            

          

            <MainStyle>

            <Navbar />
            <DashboardApp />
            
            </MainStyle>

            </RootStyle>
            </>
            
        
        

        
      
    )
}

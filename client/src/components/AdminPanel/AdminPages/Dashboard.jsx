import {React, useEffect, useState} from "react";
import { fetchAllCarTypes } from "../../../redux/carsResults";
import { fetchAllLocations } from "../../../redux/searchBar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CarCreate from "../CreateForms/CarCreate"
import { Routes, Route } from "react-router-dom";


import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
// import Page from '../components/Page';
import Iconify from './AdminComponents/Iconify';
// sections
import {
  AppTasks,
//   AppNewsUpdate,
//   AppOrderTimeline,

  AppCurrentVisits,
   AppWebsiteVisits,
//   AppTrafficBySite,
   AppWidgetSummary,
//   AppCurrentSubject,
//   AppConversionRates,
} from '../AdminPages/AdminComponents/sections/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {

  const [renderControl, setRenderControl] = useState({
    carCreate: true,
  
  });



const dispatch = useDispatch()
    const [currentCustomers, setCurrentCustomers] = useState([])
    const [carsStock, setCarStocks] = useState([])


    // eslint-disable-next-line prefer-const
    let quantityCustomers = currentCustomers.data
    let totalCustomers = 0 

    // eslint-disable-next-line prefer-const
    let stockCars = carsStock.data
    let totalStockCars = 0 

    const getUsers = async () =>{    
        // eslint-disable-next-line prefer-const
        let customers = await axios.get('/customers')
        setCurrentCustomers(customers)      }

    useEffect(() => {
        (getUsers());
      }, []);

    if(quantityCustomers){
        totalCustomers = quantityCustomers.length
        
    }

    const getCarsStock = async () =>{    
        // eslint-disable-next-line prefer-const
        let carsStock = await axios.get('/cars')
        setCarStocks(carsStock)      }

        
    useEffect(() => {
        (getCarsStock());
      }, []);

      if(stockCars){
        totalStockCars = stockCars.length
        
    }

    console.log(quantityCustomers)
    



  


  
      
    



    useEffect(() => {
        dispatch(fetchAllCarTypes());
      }, []);

      useEffect(() => {
        dispatch(fetchAllLocations());
      }, []);



      const { AllcarTypes } = useSelector((state) => state.carsResults);
      const { locations } = useSelector((state) => state.searchBar);


    

      // eslint-disable-next-line prefer-const
      let cars = AllcarTypes.length
      // eslint-disable-next-line prefer-const
      let locationAviable = locations.length

      

  const theme = useTheme();
  console.log(theme.palette)

  return (
    <div title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Bienvenido al panel de administracion
        </Typography>

        <Routes>
            <Route
          path='/carcreate'
          element={<CarCreate  />}
        />
        </Routes>

       
        {renderControl.carCreate && (
          <CarCreate
            setRenderControl={setRenderControl}
            renderControl={renderControl}
          />
        )}

        <Grid container spacing={3}>
           <><><Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Vehiculos en stock" total={totalStockCars} icon={'ant-design:android-filled'} />
          </Grid><Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Usuarios registrados" total={totalCustomers} color="info" icon={'ant-design:apple-filled'} />
            </Grid><Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Agencias disponibles" total={locationAviable} color="warning" icon={'ant-design:windows-filled'} />
            </Grid><Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Modelos de vehiculos disponibles" total={cars} color="error" icon={'ant-design:bug-filled'} />
            </Grid></><Grid item xs={12} md={6} lg={8}>
              <AppWebsiteVisits
                title="Visitas a la pagina"
                subheader="(+33%) mas que el semestre anterior"
                chartLabels={[
                  '01/01/2003',
                  '02/01/2003',
                  '03/01/2003',
                  '04/01/2003',
                  '05/01/2003',
                  '06/01/2003',
                  '07/01/2003',
                  '08/01/2003',
                  '09/01/2003',
                  '10/01/2003',
                  '11/01/2003',
                ]}
                chartData={[
                  {
                    name: 'Dias de semana',
                    type: 'column',
                    fill: 'solid',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                  },
                  {
                    name: 'Fines de semana',
                    type: 'area',
                    fill: 'gradient',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                  {
                    name: 'Feriados',
                    type: 'line',
                    fill: 'solid',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ]} />
            </Grid></> 

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Vehiculos rentados historicamente"
              chartData={[
                { label: 'Small', value: 434 },
                { label: 'Medium', value: 543 },
                { label: 'Large', value: 144 },
                { label: 'Van', value: 444 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.primary.dark,
                theme.palette.primary.light
                
                
              ] }
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}
{/* 
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}
{/* 
          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} height={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} height={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} height={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} height={32} />,
                },
              ]}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tareas importantes"
              list={[
                { id: '1', label: 'Comprar manteca 200gr' },
                { id: '2', label: 'Verificar stock de vehiculos' },
                { id: '3', label: 'Gestionar reclamos' },
                { id: '4', label: 'Gestionar usuarios' },
                { id: '5', label: 'Reparar los bugs existentes y agregar nuevos' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

import {React, useEffect} from "react";
import { fetchAllCarTypes } from "../../redux/carsResults";
import { fetchAllLocations } from "../../redux/searchBar";
import { useDispatch, useSelector } from "react-redux";





export default function AdminCard(){

    const dispatch = useDispatch()    



    useEffect(() => {
        dispatch(fetchAllCarTypes());
      }, []);

      useEffect(() => {
        dispatch(fetchAllLocations());
      }, []);



      const { AllcarTypes } = useSelector((state) => state.carsResults);
      const { locations } = useSelector((state) => state.searchBar);

    

      const cars = AllcarTypes.length
      const locationAviable = locations.length

      



    return(
        <><div><h1>Vehiculos disponibles en stock</h1></div>
        <div>
            <h2>Hay un total de {cars} Vehiculos disponibles</h2>
        </div>
        <div><h1>Ubicaciones Existentes</h1></div>
        <div>
            <h2>Hay un total de {locationAviable} Ubicaciones existentes</h2>
        </div>
        
        
        
        
        </>

        
      
    )
}
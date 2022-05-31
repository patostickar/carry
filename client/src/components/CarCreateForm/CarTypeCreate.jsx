import React from "react";
import { Formik } from "formik";



export default function CarTypeCreate(){
   
    return (
        <Formik
        initialValues={{
            carType: '',
            stock: ''
        }}

        validate={(valores)=>{

            // eslint-disable-next-line prefer-const
            let errores = {}

            if(!valores.stock){
                errores.stock = "Ingrese un stock valido"
            }

            return errores
        }}
        onSubmit={()=> {console.log("Se ha enviado el formulario")}}
        > 
        
        {({values, errors, touched, handleSubmit, handleChange, handleBlur})=>(

        <form className="carTypeCreate" onSubmit={handleSubmit}>
            

            <div>
            <label htmlFor="carType">Seleccione el vehiculo</label>
            <select 
            name="carType" 
            id="carType" 
                     
            >

                <option 
                value={values.carType}
                onChange={handleChange}
                onBlur={handleBlur} >
                    Ford Fiesta
                </option>
                

            </select>
            </div>


            <div>
            <label htmlFor="stock">Cantidad a crear en stock</label>
            <input type="number" 
            id="stock" 
            name="stock" 
            placeholder="1" 
            value={values.stock}
            onChange={handleChange}
            onBlur={handleBlur}
            
            
            />
            {touched.stock && errors.stock && <div>{errors.stock}</div>}
            </div>
            

            
            <button type="submit">Crear</button>
            
        
        
        </form>

        )}

        </Formik>
    )

}
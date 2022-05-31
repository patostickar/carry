import React from "react";
import { Formik } from "formik";



export default function LocationCreate(){

    return (
       

        <Formik
        initialValues={{
            name:'',
            street:'',
            city:'',
            state_name:'',
            phone:'',
            time_open:'',
            time_close:'',
            airport_location:''

        }}

        validate={(valores)=>{

            // eslint-disable-next-line prefer-const
            let errores = {}

            if(!valores.name){
                errores.name="Ingrese un valor"
            }
            if(!valores.street){
                errores.street="Ingrese un valor"
            }
            if(!valores.city){
                errores.city="Ingrese un valor"
            }
            if(!valores.state_name){
                errores.state_name="Ingrese un valor"
            }
            if(!valores.phone){
                errores.phone="Ingrese un valor"
            }
            if(!valores.time_open){
                errores.time_open="Ingrese un valor"
            }
            if(!valores.time_close){
                errores.time_close="Ingrese un valor"
            }
            if(!valores.airport_location){
                errores.airport_location="Ingrese un valor"
            }

            return errores
        }}

       

        onSubmit={()=> {console.log("Se ha enviado el formulario")}}
        >
            
            {({values, errors, touched,  handleSubmit, handleChange, handleBlur}) =>(

            


            <form className="LocationCreate" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Nombre</label>
                <input 
                
                type="text"                 
                id="name"                 
                name="name"                 
                placeholder="nombre"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.name && errors.name && <div className="error">{errors.name}</div>}
                

                </div>

                
                <div>
                <label htmlFor="street">Direccion</label>
                <input 
                
                type="text"                 
                id="street"                
                name="street"                 
                placeholder="direccion" 
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.street && errors.street && <div className="error">{errors.street}</div>}
                </div>


                <div>
                <label htmlFor="city" >Ciudad</label>
                {/* Esto es lo que tengo que mapear desde el estado global de locations */}
                <select 
                name="city"                 
                id="city"                 
                
               
                >
                    <option 
                     value={values.city}
                     onChange={handleChange}
                     onBlur={handleBlur}>
                        Buenos Aires
                    </option>

                    {touched.city && errors.city && <div className="error">{errors.city}</div>}

                </select>
                </div>


                <div>
                <label htmlFor="state_name" >Provincia</label>
                <select                 
                name="state_name"                 
                id="state_name"                 
                                
                >
                    <option 
                    value={values.state_name}
                    onChange={handleChange}
                    onBlur={handleBlur}>CABA
                    </option>

                    {touched.state_name && errors.state_name && <div className="error">{errors.state_name}</div>}

                </select>
                </div>


                <div>
                <label htmlFor="phone">Telefono</label>
                <input 
                type="number" 
                id="phone" 
                name="phone" 
                placeholder="+5491155254522"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                 />
                 {touched.phone && errors.phone && <div className="error">{errors.phone}</div>}
                </div>


                <div>           
                <label htmlFor="time_open">Horario de apertura</label>
                <input 
                type="number" 
                id="time_open" 
                name="time_open" 
                placeholder="08AM"
                value={values.time_open}
                onChange={handleChange}
                onBlur={handleBlur}
                 />
                 {touched.time_open && errors.time_open && <div className="error">{errors.time_open}</div>}
                </div>


                <div>
                <label htmlFor="time_close">Horario de cierre</label>
                <input 
                type="number"  
                id="time_close" 
                name="time_close" 
                placeholder="22PM"
                value={values.time_close}
                onChange={handleChange}
                onBlur={handleBlur}
                 />
                 {touched.time_close && errors.time_close && <div className="error">{errors.time_close}</div>}
                </div>


                <div>
                <label htmlFor="airport_location"> Es aeropuerto?</label>
                <input 
                type="text" 
                id="airport_location" 
                name="airport_location"
                value={values.airport_location}
                onChange={handleChange}
                onBlur={handleBlur}
                  />
                  {touched.airport_location && errors.airport_location && <div className="error">{errors.airport_location}</div>}
                </div>


            
                <button type="submit">Crea</button>
        

            </form>

        )}
        </Formik>
    )

}
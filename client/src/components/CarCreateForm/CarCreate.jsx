import React from "react";
import { Formik } from 'formik'


export default function CarCreate(){
    return (
       <Formik
       initialValues={{
           make:'',
           model:'',
           class_code:'',
           class_name:'',
           transmission:'',
           mpg: '',
           img:'',
           doors:0,
           seats:0,
           air_conditioning:false,
           large_suitcase:0,
           small_suitcase:0,


       }}


       validate={(valores)=>{

           // eslint-disable-next-line prefer-const
           let errores = {}

           if(!valores.make){
               errores.make = "Ingrese una marca"
           }

           if(!valores.model){
            errores.model = "Ingrese un modelo"
        }

        if(!valores.class_code){
            errores.class_code = "Ingrese un valor valido"
        }

        if(!valores.class_name){
            errores.className = "Ingrese un valor valido"
        }

        if(!valores.transmission){
            errores.transmission = "Ingrese un valor valido"
        }

        if(!valores.mpg){
            errores.mpg = "Ingrese un valor valido"
        }

        if(!valores.img){
            errores.img = "Ingrese un valor valido"
        }

        if(!valores.doors){
            errores.doors = "Ingrese un valor valido"
        }

        if(!valores.seats){
            errores.seats = "Ingrese un valor valido"
        }

        if(!valores.air_conditioning){
            errores.air_conditioning = "Ingrese un valor valido"
        }

        if(!valores.large_suitcase){
            errores.large_suitcase = "Ingrese un valor valido"
        }

        if(!valores.small_suitcase){
            errores.small_suitcase = "Ingrese un valor valido"
        }

           return errores
       }}


       onSubmit={()=> {console.log("Se ha enviado el formulario")}}
       >

           {({values, errors, touched, handleSubmit, handleChange, handleBlur}) =>(

           <form className="CarCreate" onSubmit={handleSubmit}>

               <div>
               <label htmlFor="make">Marca</label>

               <input 
               type="text" 
               id="make" 
               name="make" 
               placeholder="Marca"
               value={values.make}
               onChange={handleChange}
               onBlur={handleBlur}
                />

                {touched.make && errors.make && <div>{errors.make}</div>}

               
               </div>


               <div>
               <label htmlFor="model">Modelo</label>

               <input                
               type="text" 
               id="model"
               name="model"                
               placeholder="Modelo"
               value={values.model}
               onChange={handleChange}
               onBlur={handleBlur}
               
               />
               {touched.model && errors.model && <div>{errors.model}</div>}
               </div>


               <div>
               <label htmlFor="class_code">codigo de clase</label>

               <input 
               type="text" 
               id="class_code" 
               name="class_code" 
               placeholder="A..."
               value={values.class_code}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.class_code && errors.class_code && <div>{errors.class_code}</div>}
               </div>

               <div>
               <label htmlFor="class_name">nombre de clase</label>

               <input 
               type="text" 
               id="class_name" 
               name="class_name" 
               placeholder="A..."
               value={values.class_name}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.class_name && errors.class_name && <div>{errors.class_name}</div>}
               </div>


               <div>
               <label htmlFor="transmission">Transmision</label>

               <input 
               type="text" 
               id="transmission" 
               name="transmission" 
               placeholder="Manual..."
               value={values.transmission}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.transmission && errors.transmission && <div>{errors.transmission}</div>}
               </div>


               <div>
               <label htmlFor="mpg">Millas por galon</label>

               <input 
               type="text" 
               id="mpg" 
               name="mpg" 
               placeholder="Millas por galon"
               value={values.mpg}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.mpg && errors.mpg && <div>{errors.mpg}</div>}
               </div>


               <div>
               <label htmlFor="img">Imagen</label>

               <input 
               type="text" 
               id="img" 
               name="img" 
               placeholder="www.imagenesbonitas.com"
               value={values.img}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.img && errors.img && <div>{errors.img}</div>}
               </div>


               <div>
               <label htmlFor="doors">Cantidad de puertas</label>

               <input 
               type="text" 
               id="doors" 
               name="doors" 
               placeholder="4"
               value={values.doors}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.doors && errors.doors && <div>{errors.doors}</div>}
               </div>


               <div>
               <label htmlFor="seats">Asientos</label>

               <input 
               type="text" 
               id="seats" 
               name="seats" 
               placeholder="4"
               value={values.seats}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.seats && errors.seats && <div>{errors.seats}</div>}
               </div>


               <div>
               <label htmlFor="air_conditioning">Aire acondicionado</label>

               <input 
               type="text" 
               id="air_conditioning" 
               name="air_conditioning" 
               placeholder="Si"
               value={values.air_conditioning}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.air_conditioning && errors.air_conditioning && <div>{errors.air_conditioning}</div>}
               </div>


               <div>
               <label htmlFor="large_suitcase">Baul grande</label>

               <input 
               type="text" 
               id="large_suitcase" 
               name="large_suitcase" 
               placeholder="Si"
               value={values.large_suitcase}
               onChange={handleChange}
               onBlur={handleBlur}
                />
                {touched.large_suitcase && errors.large_suitcase && <div>{errors.large_suitcase}</div>}
               </div>

               <div>
               <label htmlFor="small_suitcase">Baul chico</label>

               <input 
               type="text" 
               id="small_suitcase" 
               name="small_suitcase" 
               placeholder="Si"
               value={values.small_suitcase}
               onChange={handleChange}
               onBlur={handleBlur}
               />
               {touched.small_suitcase && errors.small_suitcase && <div>{errors.small_suitcase}</div>}
               </div>

               <button type="submit">Crear</button>
              
            
           </form>

           )}

        </Formik>
    )

}
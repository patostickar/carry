import axios from 'axios'
import {useEffect,useState} from 'react'
import Checkout from '../components/Checkout'

const Payment = () => {

    const[datos,setDatos]=useState('')

    const booking=[
        {title:'Reserva 1', quantity:10, price:100},
        {title:'Reserva 2', quantity:20, price:250},
        {title:'Reserva 3', quantity:11, price:500},
    ]

  

useEffect(() => {

       axios.get('http://localhost:3001/payment/payment')
       .then((res)=>{
        setDatos(res.data)
        console.info('Contenido de la data: ',res); 
       }) 
       .catch(err=>console.log(err))
  
  
  

}, [])




  return (
    <div>
        {!datos
        ?<p>Aguarde un momento...</p>
        : <Checkout booking={booking} data={datos}/>
        }
       

    </div>
  )
}

export default Payment
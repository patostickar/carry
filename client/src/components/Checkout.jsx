import {useEffect} from 'react'

const Checkout = ({booking,data}) => {


useEffect(() => {
 const script=document.createElement('script')
 const attrDataPreference=document.createAttribute('data-preference-id')
 attrDataPreference.value=data.id

 script.src='https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js'
 script.setAttributeNode(attrDataPreference)

 console.log(data)

 document.getElementById('form1').appendChild(script)
 return()=>{
     document.getElementById('form1').removeChild(script)
 }

}, [data])


  return (
    <div>
        <form id='form1'>
        <h4>Checkout</h4>
       <div>
           {booking.map((b,i)=>{
               return(
                   <div key={i}>
                     <ul>
                         <li>{b.title}</li>
                         <li>{'$'+b.price}</li>
                         <li>{b.quantity}</li>
                     </ul>
                   </div>
               )
           })}
       </div>

        </form>
    </div>
  )
}

export default Checkout
import { useEffect } from 'react'

const Checkout = ({ data }) => {


  useEffect(() => {
    const script = document.createElement('script')
    const attrDataPreference = document.createAttribute('data-preference-id')
    attrDataPreference.value = data.id

    script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js'
    script.setAttributeNode(attrDataPreference)

    document.getElementById('pagar').appendChild(script)
  }, [data])

  return (
      <form id='pagar'></form>
  )
}

export default Checkout
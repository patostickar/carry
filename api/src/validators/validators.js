const { check }=require('express-validator')
const { validateResult } = require('../helpers/validateHelper')


const validateCreateBooking=[

        check('carTypeId','Por favor ingresa un carTypeId').exists().not().isEmpty(),
        check('customerId','Por favor ingresa un customerId').exists().not().isEmpty().trim(),
        check('locationId','Por favor ingresa una locationId').exists().not().isEmpty().trim(),
        check('pickUpDate','Por favor ingresa un pickUpDate').exists().not().isEmpty().trim(),
        check('dropOffDate','Por favor ingresa un  dropOffDate').exists().not().isEmpty().trim()
     ,
     (req,res,next)=>{
        validateResult(req,res,next)
     }
]


const validateCreateLocation=[
       check('name','Por favor ingresa un nombre')
       .isString().withMessage('El nombre solo debe contener letras')
       .isLength({min:5}).withMessage('Debe tener mas de 5 carácteres')
       .exists().not().isEmpty(),

       check('street','Por favor ingresa una calle')
       .isString().withMessage('solo debe contener letras')
       .isLength({min:5,max:50}).withMessage('Debe tener mas de 5 carácteres y menos de 50 carácteres')
       .exists().not().isEmpty(),

       check('city','Por favor ingresa una ciudad ')
       .isString().withMessage('solo debe contener letras')
       .isLength({min:5, max:30}).withMessage('Debe tener mas de 5 carácteres y no mas de 30 carácteres ')
       .exists().not().isEmpty(),

       check('stateName','Por favor ingresa una provincia ')
       .isString().withMessage('solo debe contener letras')
       .isLength({min:5, max:30}).withMessage('Debe tener mas de 5 carácteres y no mas de 30 carácteres ')
       .exists().not().isEmpty(),

       check('postalCode','Por favor ingresa un código postal ')
       .isNumeric().withMessage('No debe contener letras ni simbolos')
       .isLength({min:4, max:4}).withMessage('El còdigo debe tener 4 dígitos ')
       .exists().not().isEmpty(),
      

       check('phone','Por favor ingresa un teléfono')
       .matches(/^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/)
       .withMessage('Teléfono no válido')
       .exists().not().isEmpty(),

       check('timeOpen','Por favor ingresa una hora de apertura')
       .exists().not().isEmpty(),

       check('timeClose','Por favor ingresa una hora de cierre')
       .exists().not().isEmpty(),

       check('airportLocation','Por favor ingresa una hora de cierre').isBoolean()
       .withMessage('El valo debe ser true o false')
       .exists().not().isEmpty(),

       (req,res,next)=>{
         validateResult(req,res,next)
      }
]


const validateCreateCarType=[

   check('make','Por favor ingresa una marca')
   .isString().withMessage('La marca solo debe contener letras')
   .isLength({min:3}).withMessage('Debe tener mas de 3 carácteres')
   .exists().not().isEmpty(),

   check('model','Por favor ingresa un modelo')
   .isLength({min:3}).withMessage('Debe tener mas de 3 carácteres')
   .exists().not().isEmpty(),

   check('className','Por favor ingresa una clase')
   .isString().withMessage('La clase solo debe contener letras')
   .isLength({min:3}).withMessage('Debe tener mas de 3 carácteres')
   .exists().not().isEmpty(),

   check('transmission','Por favor ingresa una transmision')
   .isString().withMessage('La transmision solo debe contener letras')
   .exists().not().isEmpty(),

   check('mpg','Por favor ingresa una milla')
   .exists().not().isEmpty(),

   check('img','Por favor ingresa el link de una imagen ')
   .matches(/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-])*((\.jpg)|(\.png)|(\.jpeg)|(\.svg))\/?(\.webp)?/)
   .withMessage('Imagen no válida')
   .exists().not().isEmpty(),

   check('doors','Por favor ingresa cantidad de puertas')
   .isNumeric().withMessage('Debe contener solo numeros')
   .isLength({min:1, max:1}).withMessage('Coloca una cantidad correcta')
   .exists().not().isEmpty(),

   check('seats','Por favor ingresa cantidad de sillas')
   .isNumeric().withMessage('Debe contener solo numeros')
   .isLength({min:1, max:2}).withMessage('Coloca una cantidad correcta')
   .isInt({min:1,max:40}).withMessage('Coloca una cantidad correcta')
   .exists().not().isEmpty(),


   check('airConditioning','Por favor ingresa la información').isBoolean()
   .withMessage('El valo debe ser true o false')
   .exists().not().isEmpty(),

   check('largeSuitcase','Por favor ingresa la información')
   .isNumeric().withMessage('Debe contener solo numeros')
   .isLength({min:1, max:1}).withMessage('Coloca una cantidad correcta')
   .isInt({min:1,max:3}).withMessage('Lo valores deben ser entre 1 y 3')
   .exists().not().isEmpty(),

   check('smallSuitcase','Por favor ingresa la información')
   .isNumeric().withMessage('Debe contener solo numeros')
   .isLength({min:1, max:1}).withMessage('Coloca una cantidad correcta')
   .isInt({min:1,max:2}).withMessage('Lo valores deben ser entre 1 y 2')
   .exists().not().isEmpty(),

   check('price','Por favor ingresa el precio')
   .isNumeric().withMessage('Debe contener solo numeros')
   .isInt({min:1}).withMessage('El precio debe ser mayor a 0')
   .exists().not().isEmpty(),

   (req,res,next)=>{
      validateResult(req,res,next)
   }
]




module.exports={
   validateCreateBooking,
   validateCreateLocation,
   validateCreateCarType
}
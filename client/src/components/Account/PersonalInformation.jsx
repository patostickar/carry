import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import { putUser } from '../../redux/user';
import { Formik,Form,Field } from 'formik';
import * as Yup from 'yup';
import Error from '../AdminPanel/CreateForms/Error';

const validateForm = Yup.object().shape({
  firstName: Yup
    .string().matches(/^[A-Z _]+$/i, 'El campo solo debe contener letras')
    .min(3, 'Minimo 3 caracteres de longitud')
    .max(15, 'Maximo 15 caracteres de longitud')
    .required('El campo Nombre es requerido'),
  lastName: Yup
    .string().matches(/^[A-Z _]+$/i, 'El campo solo debe contener letras')
    .min(3, 'Minimo 3 caracteres de longitud')
    .max(15, 'Maximo 15 caracteres de longitud')
    .required('El campo Apellido es requerido'),
  email: Yup
    .string()
    .email('Ingrese un Email valido')
    .required('El campo Email es requerido'),
  phone: Yup
    .string() .matches(
      // eslint-disable-next-line
      /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
      'Teléfono no válido'
    )
    .required('El campo Telefono es requerido'),
  city: Yup
    .string()
    .min(3, 'Minimo 3 caracteres de longitud')
    .required('El campo City es requerido'),
  street: Yup
    .string()
    .min(3, 'Minimo 3 caracteres de longitud')
    .required('El campo Direccion es requerido'),
  postalCode: Yup
  .number('Código no válido')
  .moreThan(1000, 'El código debe tener 4 digitos')
  .lessThan(10000, 'El código debe tener 4 digitos')
  .typeError('El Campo no es válido')
  .required('El campo es obligatorio'),
});

export const PersonalInformation = ({ setRenderControl, renderControl }) => {
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    street,
    postalCode,
    img,
    id,
  } = useSelector((state) => state.user);

  // const handleSubmit = (e) => {
  //   setRenderControl({ ...renderControl, personalInfo: !renderControl.personalInfo })
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     city,
  //     street,
  //     postalCode,
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     dispatch(putUser(id, values));
  //   },
  // });

  return (
    <>

      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={5}
        style={{ border: 'solid 1px lightgrey', borderRadius: '8px' }}
      >
        <Box
          style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
        >
          <Avatar
            src={img}
            sx={{
              height: 120,
              mb: 2,
              width: 120,
            }}
          />
        </Box>
        <Formik
         initialValues={{
    firstName,
      lastName,
      email,
      phone,
      city,
      street,
      postalCode,
         }}

         onSubmit={(values)=>{
          dispatch(putUser(id, values));

         }}
         validationSchema={validateForm}  
        >
        {({values,errors,touched,handleSubmit,handleChange})=>(
        <Form  autoComplete='off' onSubmit={handleSubmit}>
          <Card>
            <CardHeader
              subheader='Actualiza tus datos'
              title={
                <Typography gutterBottom variant='h4'>
                  Informacion Personal
                </Typography>
              }
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Field
                    type='text'
                    as={TextField}
                    fullWidth
                    label='First name'
                    name='firstName'
                    required
                    variant='outlined'
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  {touched.firstName && errors.firstName ? (
                    <Error>{errors.firstName}</Error>
                  ):null}
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    type='text'
                    as={TextField}
                    fullWidth
                    label='Last name'
                    name='lastName'
                    required
                    variant='outlined'
                    value={values.lastName}
                    onChange={handleChange}
                  />
                   {touched.lastName && errors.lastName ? (
                    <Error>{errors.lastName}</Error>
                  ):null}
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    as={TextField}
                    type='email'
                    fullWidth
                    label='Email Address'
                    name='email'
                    required
                    variant='outlined'
                    value={values.email}
                    onChange={handleChange}
                  />
                     {touched.email && errors.email ? (
                    <Error>{errors.email}</Error>
                  ):null}
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    as={TextField}
                    type='number'
                    fullWidth
                    label='Phone Number'
                    name='phone'
                    required
                    variant='outlined'
                    value={values.phone}
                    onChange={handleChange}
                  />
                   {touched.phone && errors.phone ? (
                    <Error>{errors.phone}</Error>
                  ):null}
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    as={TextField}
                    type='text'
                    fullWidth
                    label='City'
                    name='city'
                    required
                    variant='outlined'
                    value={values.city}
                    onChange={handleChange}
                  />
                     {touched.city && errors.city ? (
                    <Error>{errors.city}</Error>
                  ):null}
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    type='text'
                    as={TextField}
                    fullWidth
                    label='Street'
                    name='street'
                    required
                    variant='outlined'
                    value={values.street}
                    onChange={handleChange}
                  />
                   {touched.street && errors.street ? (
                    <Error>{errors.street}</Error>
                  ):null}
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    type='number'
                    as={TextField}
                    fullWidth
                    label='Postal Code'
                    name='postalCode'
                    required
                    variant='outlined'
                    value={values.postalCode}
                    onChange={handleChange}
                  />
                    {touched.postalCode && errors.postalCode ? (
                    <Error>{errors.postalCode}</Error>
                  ):null}
                </Grid>
              </Grid>
            </CardContent>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <Button color='primary' variant='contained' type='submit'>
                Guardar Cambios
              </Button>
            </Box>
          </Card>
        </Form>
       
           )}
            </Formik>
      </Grid>
    </>
  );
};

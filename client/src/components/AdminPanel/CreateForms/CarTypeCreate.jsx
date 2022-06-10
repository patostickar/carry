import { Formik, Form, Field } from 'formik';
import Alerts from '../../GeneralFuntions/Alerts';
import * as Yup from 'yup';
import axios from 'axios';
import logError from '../../GeneralFuntions/logError';
import styles from './styles/Formulario.module.css';
import Error from './Error';
import { styled } from '@mui/material/styles';
import DashboardSideBar from "../AdminPages/AdminComponents/sections/layouts/DashboardSidebar"
import DashboardNavBar from "../AdminPages/AdminComponents/sections/layouts/DashboardNavBar"



const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 0;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
   
    
  });

  

  const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }));
  
  




export default function CarCreate() {
  async function postCar(values) {
    try {
      await axios.post('/cartypes', values);
    } catch (error) {
      logError(error);
    }
  }

  const newCarTypeSchema = Yup.object().shape({
    // Validar Formulario
    make: Yup.string()
      .matches(/^[A-Z]+$/i, 'El campo solo debe contener letras')
      .min(3, 'El nombre de la  marca es muy corto')
      .max(20, 'El nombre de la marca es muy larga')
      .required('La marca es requerida'),

    model: Yup.string()
      .matches(/^[A-Z]+$/i, 'El campo solo debe contener letras')
      .min(3, 'El modelo es muy corto')
      .max(20, 'El modelo es muy largo')
      .required('El modelo es requerido'),

    className: Yup.string()
      .matches(/^[A-Z]+$/i, 'El campo solo debe contener letras')
      .min(3, 'La clase es muy corta')
      .max(20, 'La clase es muy largo')
      .required('La clase es requerida'),

    transmission: Yup.string()
      .max(10, 'Debe seleccionar una transmision')
      .required('Debe seleccionar una transmision'),

    mpg: Yup.string().required('El campo es obligatorio'),

    img: Yup.string()
      .matches(
        /(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-])*((\.jpg)|(\.png)|(\.jpeg)|(\.svg))\/?(\.webp)?/,
        'Debe ser un formato de imagen'
      )
      .required('El campo es obligatorio'),

    doors: Yup.number()
      .positive('Numero no válido')
      .integer('Numero no válido')
      .typeError('El Campo no es válido')
      .required('El campo es obligatorio'),

    seats: Yup.number()
      .positive('Numero no válido')
      .integer('Numero no válido')
      .typeError('El Campo no es válido')
      .required('El campo es obligatorio'),

    airConditioning: Yup.boolean()
      .required('Debe seleccionar un valor')
      .typeError('El Campo no es válido'),

    largeSuitcase: Yup.number()
      .positive('Numero no válido')
      .typeError('El Campo no es válido')
      .required('El campo es obligatorio'),

    smallSuitcase: Yup.number()
      .positive('Numero no válido')
      .typeError('El Campo no es válido')
      .required('El campo es obligatorio'),

    price: Yup.number()
      .positive('Numero no válido')
      .typeError('El Campo no es válido')
      .required('El Campo es obligatorio'),
  });

  // constantes locales para el drop down de los selects
  const numbers = ['---', 1, 2, 3, 4, 5, 6, 7];
  const baul = [0, 1, 2];
  const boolean = [
    { key: 'Seleccione un valor', value: null },
    { key: 'Si', value: true },
    { key: 'No', value: false },
  ];
  const transmicion = ['Seleccione un valor', 'Manual', 'Automatico'];

  return (
    <RootStyle>
    <DashboardNavBar />
    <DashboardSideBar />
    <MainStyle>
    <div className={styles.container}>
      <Formik
        initialValues={{
          make: '',
          model: '',
          className: '',
          transmission: '',
          mpg: '',
          img: '',
          doors: 0,
          seats: 0,
          airConditioning: null,
          largeSuitcase: 0,
          smallSuitcase: 0,
          price: 0,
        }}
        onSubmit={(values) => {
          postCar(values);

          Alerts('success', 'Vehiculo creado');
        }}
        validationSchema={newCarTypeSchema}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <div className={styles.content}>
              <label htmlFor='make' className={styles.label}>
                Marca
              </label>

              <Field
                type='text'
                id='make'
                name='make'
                placeholder='Marca del carro'
                value={values.make}
                className={styles.field}
              />
              {touched.make && errors.make ? (
                <Error>{errors.make}</Error>
              ) : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='model' className={styles.label}>
                Modelo
              </label>
              <Field
                type='text'
                id='model'
                name='model'
                placeholder='Modelo'
                value={values.model}
                className={styles.field}
              />

              {touched.model && errors.model ? (
                <Error>{errors.model}</Error>
              ) : null}
            </div>
            <div className={styles.content}>
              <label htmlFor='className' className={styles.label}>
                Clase
              </label>
              <Field
                type='text'
                id='className'
                name='className'
                placeholder='Small...'
                value={values.className}
                className={styles.field}
              />
              {touched.className && errors.className ? (
                <Error>{errors.className}</Error>
              ) : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='transmission' className={styles.label}>
                Transmision
              </label>

              <Field
                as='select'
                name='transmission'
                id='transmission'
                className={styles.field}
                value={values.transmission}
              >
                {transmicion.map((t) => (
                  <option value={t} id={values.t} key={t}>
                    {`${t}`}
                  </option>
                ))}
              </Field>

              {touched.transmission && errors.transmission ? (
                <Error>{errors.transmission}</Error>
              ) : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='mpg' className={styles.label}>
                Millas por galon
              </label>

              <Field
                type='text'
                id='mpg'
                name='mpg'
                placeholder='Millas por galon'
                value={values.mpg}
                className={styles.field}
              />

              {touched.mpg && errors.mpg ? <Error>{errors.mpg}</Error> : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='img' className={styles.label}>
                Imagen
              </label>

              <Field
                type='text'
                id='img'
                name='img'
                placeholder='imagen'
                value={values.img}
                className={styles.field}
              />

              {touched.img && errors.img ? <Error>{errors.img}</Error> : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='doors' className={styles.label}>
                Cantidad de puertas
              </label>

              <Field
                as='select'
                name='doors'
                id='doors'
                className={styles.field}
                value={values.doors}
              >
                {numbers.map((d) => (
                  <option value={d} id={values.d} key={d}>
                    {`${d} Puertas`}
                  </option>
                ))}
              </Field>
              {touched.doors && errors.doors ? (
                <Error>{errors.doors}</Error>
              ) : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='seats' className={styles.label}>
                Asientos
              </label>

              <Field
                as='select'
                name='seats'
                id='seats'
                className={styles.field}
                value={values.seats}
              >
                {numbers.map((d) => (
                  <option value={d} id={values.d} key={d}>
                    {`${d} Asientos`}
                  </option>
                ))}
              </Field>
              {touched.seats && errors.seats ? (
                <Error>{errors.seats}</Error>
              ) : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='airConditioning' className={styles.label}>
                Aire acondicionado
              </label>

              <Field
                as='select'
                name='airConditioning'
                id='airConditioning'
                className={styles.field}
                value={values.airConditioning}
              >
                {boolean.map((d) => (
                  <option value={d.value} id={values.d} key={d.value}>
                    {`${d.key}`}
                  </option>
                ))}
              </Field>
              {touched.airConditioning && errors.airConditioning ? (
                <Error>{errors.airConditioning}</Error>
              ) : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='largeSuitcase' className={styles.label}>
                Baul grande
              </label>

              <Field
                as='select'
                name='largeSuitcase'
                id='largeSuitcase'
                className={styles.field}
                value={values.largeSuitcase}
              >
                {baul.map((d) => (
                  <option value={d} id={values.d} key={d}>
                    {`${d}`}
                  </option>
                ))}
              </Field>
              {touched.largeSuitcase && errors.largeSuitcase ? (
                <Error>{errors.largeSuitcase}</Error>
              ) : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='smallSuitcase' className={styles.label}>
                Baul chico
              </label>

              <Field
                as='select'
                name='smallSuitcase'
                id='smallSuitcase'
                className={styles.field}
                value={values.smallSuitcase}
              >
                {baul.map((d) => (
                  <option
                    value={d}
                    id={values.d}
                    key={d}
                    onChange={handleChange}
                  >
                    {`${d}`}
                  </option>
                ))}
              </Field>
              {touched.smallSuitcase && errors.smallSuitcase ? (
                <Error>{errors.smallSuitcase}</Error>
              ) : null}
            </div>

            <div className={styles.content}>
              <label htmlFor='price' className={styles.label}>
                Precio
              </label>

              <Field
                type='number'
                id='price'
                name='price'
                placeholder='0'
                value={parseInt(values.price)}
                className={styles.field}
              />
              {touched.price && errors.price ? (
                <Error>{errors.price}</Error>
              ) : null}
            </div>
            <button type='Submit'>Crear</button>
          </Form>
        )}
      </Formik>
    </div>
    </MainStyle>
    </RootStyle>
  );
}

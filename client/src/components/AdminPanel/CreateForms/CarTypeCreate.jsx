import { Formik, Form, Field } from 'formik';
import Alerts from '../../GeneralFuntions/Alerts';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './styles/Formulario.module.css';
import Error from './Error';
import DashboardSideBar from '../AdminPages/AdminComponents/sections/layouts/DashboardSidebar';

export default function CarCreate() {
  async function postCar(values) {
    try {
      await axios.post('/cartypes', values, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const newCarTypeSchema = Yup.object().shape({
    // Validar Formulario
    make: Yup.string()
      .matches(/^[A-Z _]+$/i, 'El campo solo debe contener letras')
      .min(3, 'El nombre de la  marca es muy corto')
      .max(10, 'El nombre de la marca es muy larga')
      .required('La marca es requerida'),

    model: Yup.string()
      .matches(/^[A-Z _]+$/i, 'El campo solo debe contener letras')
      .min(3, 'El modelo es muy corto')
      .max(10, 'El modelo es muy largo')
      .required('El modelo es requerido'),

    className: Yup.string()
     
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
      // .positive('Numero no válido')
      .typeError('El Campo no es válido')
      .required('El campo es obligatorio'),

    smallSuitcase: Yup.number()
      // .positive('Numero no válido')
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

  // function getUniquePropertyValues(array, prop) {
  //   return [...new Set(array.map((element) => element[prop]))];
  // }

  const transmission = ['Seleccione un valor', 'Manual', 'Automatico'];
  const className = [
    'Seleccione un valor',
    'Pequeño',
    'Mediano',
    'Grande',
    'Premium',
    'Convertible',
    'Minivan',
    'SUVs',
  ];

  return (
    // <RootStyle>

    // <MainStyle>
    <div className={styles.body}>
      <div className={styles.container}>
        <DashboardSideBar />

        <h1>Crea tu Auto</h1>
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
            airConditioning: '',
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
            <Form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.input_box}>
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

              <div className={styles.input_box}>
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

              <div className={styles.input_box}>
                <label className={styles.label}>Clase</label>

                <Field
                  as='select'
                  name='className'
                  id='className'
                  className={styles.field}
                  value={values.className}
                >
                  {className.map((c) => (
                    <option value={c} id={values.c} key={c}>
                      {`${c}`}
                    </option>
                  ))}
                </Field>

                {touched.className && errors.className ? (
                  <Error>{errors.className}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
                <label className={styles.label}>Transmision</label>

                <Field
                  as='select'
                  name='transmission'
                  id='transmission'
                  className={styles.field}
                  value={values.transmission}
                >
                  {transmission.map((t) => (
                    <option value={t} id={values.t} key={t}>
                      {`${t}`}
                    </option>
                  ))}
                </Field>

                {touched.transmission && errors.transmission ? (
                  <Error>{errors.transmission}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
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

              <div className={styles.input_box}>
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

              <div className={styles.input_box}>
                <label className={styles.label}>Cantidad de puertas</label>

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

              <div className={styles.input_box}>
                <label className={styles.label}>Asientos</label>

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

              <div className={styles.input_box}>
                <label className={styles.label}>Aire acondicionado</label>

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

              <div className={styles.input_box}>
                <label className={styles.label}>Cantidad maletas grandes</label>

                <Field
                  as='select'
                  name='largeSuitcase'
                  id='largeSuitcase'
                  className={styles.field}
                  value={values.largeSuitcase}
                >
                  <option value=''>Seleccione</option>

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

              <div className={styles.input_box}>
                <label className={styles.label}>
                  Cantidad de maletas chicas
                </label>

                <Field
                  as='select'
                  name='smallSuitcase'
                  id='smallSuitcase'
                  className={styles.field}
                  value={values.smallSuitcase}
                >
                  <option value=''>Seleccione</option>
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

              <div className={styles.input_box}>
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

              <button className={styles.btn} type='Submit'>
                Crear
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>

    // </MainStyle>
    // </RootStyle>
  );
}

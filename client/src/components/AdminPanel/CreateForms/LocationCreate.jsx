import { Form, Formik, Field } from 'formik';
import Alerts from '../../GeneralFuntions/Alerts';
import axios from 'axios';
import * as Yup from 'yup';
import Error from './Error';
import styles from './styles/Formulario.module.css';
import DashboardSidebar from '../AdminPages/AdminComponents/sections/layouts/DashboardSidebar';

export default function LocationCreate() {
  async function postLocation(values) {
    try {
      await axios.post('/locations', values, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const provincias = [
    'Ciudad de Buenos Aires',
    'Buenos Aires',
    'Jujuy',
    'Salta',
    'Tucuman',
    'San juan',
    'Formosa',
    'Corrientes',
    'Chaco',
    'Misiones',
    'Santa Fe',
    'Cordoba',
    'San Luis',
    'Entre Rios',
    'Mendoza',
    'Rio Negro',
    'Neuquen',
    'Santa Cruz',
    'Tierra Del Fuego',
    'La Pampa',
    'La Rioja',
    'Santiago del Estero',
    'Chubut',
    'Catamarca',
  ];

  const horarios = [];
  for (let i = 0; i < 24; i++) {
    horarios.push(i);
  }

  const boolean = [
    { key: 'Seleccione un valor', value: null },
    { key: 'Si', value: true },
    { key: 'No', value: false },
  ];

  const newLocationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'El nombre de la  localidad es muy corto')
      .max(50, 'El nombre de la localidad es muy larga')
      .required('El nombre es requerido'),

    street: Yup.string()
      .min(3, 'La dirección es muy corta')
      .max(50, 'La dirección muy larga')
      .required('La dirección es requerida'),

    city: Yup.string()
      .min(3, 'El nombre de la ciudad es muy corto')
      .max(30, 'El nombre de la icudad es muy larga')
      .required('La ciudad es requerida'),

    stateName: Yup.string().required('La provincia es requerida'),

    postalCode: Yup.number()
      .integer('Código no válido')
      .moreThan(1000, 'El código debe tener 4 digitos')
      .lessThan(10000, 'El código debe tener 4 digitos')
      .typeError('El Campo no es válido')
      .required('El campo es obligatorio'),

    lat: Yup.number()
      .typeError('El Campo no es válido')
      .required('El campo es obligatorio'),

    lon: Yup.number()
      .typeError('El Campo no es válido')
      .required('El campo es obligatorio'),

    phone: Yup.string()
      .matches(
        // eslint-disable-next-line
        /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
        'Teléfono no válido'
      )
      .required('El campo es obligatorio'),

    timeOpen: Yup.string().required('El campo es obligatorio'),

    timeClose: Yup.string().required('El campo es obligatorio'),

    airportLocation: Yup.boolean()
      .required('Debe seleccionar un valor')
      .typeError('El Campo no es válido'),
  });

  return (
    // <RootStyle>

    // <MainStyle>
    <div className={styles.body}>
      <div className={styles.container}>
        <DashboardSidebar />

        <h1>Crea tu Agencia</h1>

        <Formik
          initialValues={{
            name: '',
            street: '',
            city: '',
            stateName: '',
            postalCode: '',
            lat: '',
            lon: '',
            phone: '',
            timeOpen: '',
            timeClose: '',
            airportLocation: '',
          }}
          onSubmit={(values, { resetForm }) => {
            postLocation(values);
            Alerts('success', 'location creado');
            resetForm();
          }}
          validationSchema={newLocationSchema}
        >
          {({ values, errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.input_box}>
                <label htmlFor='name' className={styles.label}>
                  Nombre
                </label>
                <Field
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Agencia'
                  value={values.name}
                  className={styles.field}
                />
                {touched.name && errors.name ? (
                  <Error>{errors.name}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
                <label htmlFor='street' className={styles.label}>
                  Dirección
                </label>
                <Field
                  type='text'
                  id='street'
                  name='street'
                  value={values.street}
                  className={styles.field}
                />
                {touched.street && errors.street ? (
                  <Error>{errors.street}</Error>
                ) : null}
              </div>
              <div className={styles.input_box}>
                <label htmlFor='city' className={styles.label}>
                  Ciudad
                </label>
                <Field
                  type='text'
                  id='city'
                  name='city'
                  value={values.city}
                  className={styles.field}
                />
                {touched.city && errors.city ? (
                  <Error>{errors.city}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
                <label htmlFor='city' className={styles.label}>
                  Provincia
                </label>
                <Field
                  as='select'
                  id='stateName'
                  name='stateName'
                  value={values.stateName}
                  className={styles.field}
                >
                  <option value=''>Seleccione</option>
                  {provincias.map((t) => (
                    <option value={t} id={values.t} key={t}>
                      {`${t}`}
                    </option>
                  ))}
                </Field>
                {touched.stateName && errors.stateName ? (
                  <Error>{errors.stateName}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
                <label htmlFor='lat' className={styles.label}>
                  Latitud{' '}
                </label>
                <Field
                  type='text'
                  id='lat'
                  name='lat'
                  placeholder='-##.####'
                  value={values.lat}
                  className={styles.field}
                />
                {touched.lat && errors.lat ? <Error>{errors.lat}</Error> : null}
              </div>
              <div className={styles.input_box}>
                <label htmlFor='lon' className={styles.label}>
                  Longitud{' '}
                </label>
                <Field
                  type='text'
                  id='lon'
                  name='lon'
                  placeholder='-##.####'
                  value={values.lon}
                  className={styles.field}
                />
                {touched.lon && errors.lon ? <Error>{errors.lon}</Error> : null}
              </div>
              <div className={styles.input_box}>
                <label htmlFor='postalCode' className={styles.label}>
                  Código postal
                </label>
                <Field
                  type='text'
                  id='postalCode'
                  name='postalCode'
                  placeholder='####'
                  value={values.postalCode}
                  className={styles.field}
                />
                {touched.postalCode && errors.postalCode ? (
                  <Error>{errors.postalCode}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
                <label htmlFor='phone' className={styles.label}>
                  Teléfono
                </label>
                <Field
                  type='text'
                  id='phone'
                  name='phone'
                  placeholder='+54 111 2345 6789'
                  value={values.phone}
                  className={styles.field}
                />
                {touched.phone && errors.phone ? (
                  <Error>{errors.phone}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
                <label htmlFor='timeOpen' className={styles.label}>
                  Horario de apertura
                </label>
                <Field
                  as='select'
                  id='timeOpen'
                  name='timeOpen'
                  value={values.timeOpen}
                  className={styles.field}
                >
                  <option value=''>Seleccione</option>

                  {horarios.map((d) => (
                    <option value={d} id={values.d} key={d}>
                      {`${d} HS`}
                    </option>
                  ))}
                </Field>
                {touched.timeOpen && errors.timeOpen ? (
                  <Error>{errors.timeOpen}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
                <label htmlFor='timeClose' className={styles.label}>
                  Horario de cierre
                </label>
                <Field
                  as='select'
                  id='timeClose'
                  name='timeClose'
                  value={values.timeClose}
                  className={styles.field}
                >
                  <option value=''>Seleccione</option>

                  {horarios.map((d) => (
                    <option value={d} id={values.d} key={d}>
                      {`${d} HS`}
                    </option>
                  ))}
                </Field>
                {touched.timeClose && errors.timeClose ? (
                  <Error>{errors.timeClose}</Error>
                ) : null}
              </div>

              <div className={styles.input_box}>
                <label htmlFor='airportLocation' className={styles.label}>
                  {' '}
                  Ubicada en aeropuerto?
                </label>
                <Field
                  as='select'
                  id='airportLocation'
                  name='airportLocation'
                  value={values.airportLocation}
                  className={styles.field}
                >
                  {boolean.map((d) => (
                    <option value={d.value} id={values.d} key={d.value}>
                      {`${d.key}`}
                    </option>
                  ))}
                </Field>
                {touched.airportLocation && errors.airportLocation ? (
                  <Error>{errors.airportLocation}</Error>
                ) : null}
              </div>

              <button className={styles.btn} type='submit'>
                Crear
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

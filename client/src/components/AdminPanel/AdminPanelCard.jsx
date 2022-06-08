import { React, useEffect, useState } from 'react';
import { fetchAllCarTypes } from '../../redux/carsResults';
import { fetchAllLocations } from '../../redux/searchBar';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

export default function AdminCard() {
  const dispatch = useDispatch();
  const [currentCustomers, setCurrentCustomers] = useState([]);
  const [carsStock, setCarStocks] = useState([]);

  const quantityCustomers = currentCustomers.data;
  let totalCustomers = 0;

  const stockCars = carsStock.data;
  let totalStockCars = 0;

  const getUsers = async () => {
    // eslint-disable-next-line prefer-const
    let customers = await axios.get('/customers');
    setCurrentCustomers(customers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (quantityCustomers) {
    totalCustomers = quantityCustomers.length;
  }

  const getCarsStock = async () => {
    // eslint-disable-next-line prefer-const
    let carsStock = await axios.get('/cars');
    setCarStocks(carsStock);
  };

  useEffect(() => {
    getCarsStock();
  }, []);

  if (stockCars) {
    totalStockCars = stockCars.length;
  }

  quantityCustomers;

  useEffect(() => {
    dispatch(fetchAllCarTypes());
  }, []);

  useEffect(() => {
    dispatch(fetchAllLocations());
  }, []);

  const { AllcarTypes } = useSelector((state) => state.carsResults);
  const { locations } = useSelector((state) => state.searchBar);

  const cars = AllcarTypes.length;
  const locationAviable = locations.length;

  return (
    <>
      <div>
        <h1>Modelos de vehiculos disponibles</h1>
      </div>
      <div>
        <h2>Hay un total de {cars} modelos de vehiculos existentes</h2>
      </div>

      <div>
        <h1>Vehiculos para alquiler en stock</h1>
      </div>
      <div>
        <h2>
          Hay un total de {totalStockCars} vehiculos disponibles en{' '}
          {locationAviable} agencias
        </h2>
      </div>

      <div>
        <h1>Ubicaciones existentes</h1>
      </div>
      <div>
        <h2>Hay un total de {locationAviable} Ubicaciones existentes</h2>
      </div>

      <div>
        <h1>Usuarios existentes</h1>
      </div>
      <div>
        <h2>Hay un total de {totalCustomers} usuarios registrados</h2>
      </div>
    </>
  );
}

import { React, useState, useEffect } from 'react';
import axios from 'axios';
import List from './UsersList';

export default function UsersManagment() {
  const [currentCustomers, setCurrentCustomers] = useState([]);
  let totalCustomers = 0;

  const getUsers = async () => {
    // eslint-disable-next-line prefer-const
    let customers = await axios.get('/customers');
    setCurrentCustomers(customers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (currentCustomers) {
    totalCustomers = currentCustomers.data;
  }
  // if (totalCustomers){
  // id =totalCustomers.map((d)=> d.id)
  // }

  return (
    <div>
      {totalCustomers?.map((t) => (
        <div key={t.id}>
          <List id={t.id} email={t.email} />
        </div>
      ))}
    </div>
  );
}

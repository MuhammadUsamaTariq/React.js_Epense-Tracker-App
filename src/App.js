import React, { useState } from 'react';

import Header from './components/header';

import Balance from './components/balance';
import IncomeEpenses from './components/incomeExpenses';
import TransactionList from './components/transactionList';
import AddTransaction from './components/addTransaction';
import {GlobalProvider} from './context/globalState';

function App() {

  return (

    <div className='container'>
    <GlobalProvider >
    
    <Header />

      <Balance />

      <IncomeEpenses />

      <TransactionList />

      <AddTransaction />
      
      
    </GlobalProvider>
    </div>




  );
}

export default App;

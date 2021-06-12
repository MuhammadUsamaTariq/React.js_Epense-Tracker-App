import { useContext } from 'react';
import { GlobalConext } from '../context/globalState';

const IncomeEpenses = () => {

    const { Transactions } = useContext(GlobalConext);

    const amount = Transactions.map(transaction => transaction.amount);
 
    const income = amount.filter(amount => amount>0).reduce((acc, curr)=>(acc +=curr),0).toFixed(2);

    const expense = amount.filter(amount => amount<0).reduce((acc, curr)=>(acc +=curr),0);

    return (
        
           <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
        
    );
}

export default IncomeEpenses;
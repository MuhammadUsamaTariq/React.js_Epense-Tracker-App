import { useContext } from 'react';
import { GlobalConext } from '../context/globalState';


const Balance = () => {

    const { Transactions } = useContext(GlobalConext);

    const amount = Transactions.map(transaction => transaction.amount);

    const balance = amount.reduce((acc, curr) => (acc += curr), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 >${balance}</h1>
        </>
    );
}

export default Balance;

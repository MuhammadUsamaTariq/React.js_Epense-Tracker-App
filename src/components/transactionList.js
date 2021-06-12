import { useContext } from "react";

import { GlobalConext } from '../context/globalState';
import Transaction from "./transaction";



const TransactionList = () => {
    const {Transactions} = useContext(GlobalConext);

    
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {Transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} /> )}
                
            </ul></>
    );
}

export default TransactionList;
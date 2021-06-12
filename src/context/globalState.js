import React, { createContext , useReducer } from 'react';

import AppReducer from './AppReducer';

const initialState = {
    Transactions : [
         
        ]
}

export const GlobalConext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction (id) {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        })
    }

    function addTransaction (transaction) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        })
    }

    return(
        <GlobalConext.Provider value={{
            Transactions : state.Transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalConext.Provider>
    )
}
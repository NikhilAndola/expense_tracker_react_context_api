import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'


//Inital state
const initialState = {
    transactions: []
  }

  //Create context
  export const GlobalContext = createContext(initialState);

  //Provider componentreducer
export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions 
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        }); 
    }

    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        }); 
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {props.children}
    </GlobalContext.Provider>)
}
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import axios from 'axios'

//BASEURL
const BASE_URL = "http://localhost:3008/api/v1";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const[incomes, setIncomes] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[error, setError] = useState(null);
    return<GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
}
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {useState, useContext} from 'react'
import axios from 'axios'

//BASEURL
const BASE_URL = "http://localhost:3008/api/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const[incomes, setIncomes] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[error, setError] = useState(null);

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}income`,income)
        .catch((err) => {
            setError(err.response);
        })
        getIncomes()
     }

    //getIncome
    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}income`)
        setIncomes(response.data)
        //console.log(response);
    } 

    //deleteIncome
    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}income/${id}`)
        getIncomes()

    }

    return (
    <GlobalContext.Provider value= {{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome
    
        }}>
        {children}
   </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {

    return useContext(GlobalContext)
}
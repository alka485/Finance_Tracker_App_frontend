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
        try {
            const response = await axios.get(`${BASE_URL}income`)
            setIncomes(response.data)
        }  catch (err) {
            setError(err.response);
        }        
    } 

    //deleteIncome
    const deleteIncome = async (id) => {
        
        try {
            await axios.delete(`${BASE_URL}income/${id}`)
            getIncomes() //Refresh the list after deletion

        } catch (err) {
            setError(err.response)
        }
    }

    //totalIncome 
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount
        })
        
        return totalIncome;
    }

    //Calculate Expense
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }



    
    return (
    <GlobalContext.Provider value= {{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome
    
        }}>
        {children}
   </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {

    return useContext(GlobalContext)
}
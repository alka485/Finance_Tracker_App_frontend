/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {useState, useContext} from 'react'
import axios from 'axios'

//BASEURL
const BASE_URL = "https://finance-tracker-app-backend-1.onrender.com/api/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const[incomes, setIncomes] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[error, setError] = useState(null);

    //calculate incomes
    const addIncome = async (income) => {
        
        try {
            const response = await axios.post(`${BASE_URL}income`, income);
            getIncomes();
            console.log("hello from front");
          } catch (err) {
            if (err.response.data.message) {
              // Display validation errors
              setError(err.response.data.msg);
            } else {
              // Display generic error message
              setError('All fields are required');
            }
          }
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
        try {
            const response = await axios.post(`${BASE_URL}expense`, income);
            getExpenses();
          } catch (err) {
            if (err.response.data.message) {
              // Display validation errors
              setError(err.response.data.msg);
            } else {
              // Display generic error message
              setError('All fields are required');
            }
          }
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}expense`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}expense/${id}`)
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
        history.sort((a, b) => {  //for sorting data based on creation date
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
          return history.slice(0, 3)  //getting only 3 recent transactions
    }

    //Sign-Up Function
    // const signup = async (email,password) => {
    //     try {

    //     } catch (err) {
    //         setError(err.response ? err.response.data.message : 'Sign-Up Failed')
    //     }

    // }
  
    return (
    <GlobalContext.Provider value= {{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError
    
        }}>
        {children}
   </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {

    return useContext(GlobalContext)
}
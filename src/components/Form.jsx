/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
//-------------------------------------------dependency
import { useGlobalContext } from '../context/globalContext';


const FormStyled = styled.form ``;


const Form = () => {

    const {addIncome} = useGlobalContext()

    //by default value is empty
    const [ inputState , setInputState] = useState({
        title : '',
        amount : '',
        type: '',
        date : '',
        category : '',
        description : ''
    
    });

    //destructure the value
    const { title ,amount,date,category,description} = inputState;

    //handleInputChange
    const handleInputChange = name=> e => {
        setInputState({...inputState, [name]:e.target.value})
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addIncome(inputState)

    }
    
  return (
    <FormStyled onSubmit={handleFormSubmit}>
        <div className="input-control">
            <input type="text"
                   value={title}
                   name={'title'}
                   placeholder='Salary Title'
                   onChange={handleInputChange('title')}
             />
        </div>
        <div className="input-control">
            <input type="text"
                   value={amount}
                   name={'amount'}
                   placeholder='Salary Amount'
                   onChange={handleInputChange('amount')}
             />
        </div>
        <div className="input-control">
            <DatePicker id='date'
                  placeholderText='Enter a Date'
                  selected={date}
                  dateFormat="MM/dd/yyyy"
                  onChange={(date)=>{
                    setInputState({...inputState, date : date})
                  }}     
            />
        </div>
        <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInputChange('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInputChange('description')}></textarea>
            </div>
            <div className="submit-btn">
                <button>Add Income</button>
            </div>
    </FormStyled>
  )
}

export default Form
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const FormStyled = styled.form ``;


const Form = () => {

    //by default value is empty
    const [ inputState , setInputState] = useState({
        title : '',
        amount : '',
        date : '',
        category : '',
        description : ''
    
    });

    //destructure the value
    const { title ,amount,date,category,description} = inputState;

    //handleInputChange
    const handleInputChange = (name ,e) => {
        setInputState({...inputState, [name] : e.target.value})
        
    }
    
  return (
    <FormStyled>
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
                  dateFormat="MM/DD/YYYY"
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
    </FormStyled>
  )
}

export default Form
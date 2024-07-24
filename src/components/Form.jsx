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
    </FormStyled>
  )
}

export default Form
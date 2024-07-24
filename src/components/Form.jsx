/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'

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
        console.log("value");
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
    </FormStyled>
  )
}

export default Form
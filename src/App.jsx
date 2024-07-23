/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//------------------------------dependeny
import bg from './img/bg.png'
import {MainLayout}  from './styles/Layout'
import Orb from './components/Orb'

//import './App.css'

const AppStyled = styled.div `
      height: 100vh;
      background-image: url(${bg});
      position:relative;
`;

function App() {
  

  return (
    <AppStyled className='App'>
      <Orb/>
      <MainLayout>
        
      </MainLayout>
      
    </AppStyled>
  )
}

export default App

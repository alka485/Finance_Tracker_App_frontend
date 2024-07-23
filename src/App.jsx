/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
//------------------------------dependeny
import bg from './img/bg.png'
import {MainLayout}  from './styles/Layout'
//import Orb from './components/Orb'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Expenses from './components/Expenses'
import { useGlobalContext} from './context/globalContext'

//import './App.css'

const AppStyled = styled.div `
      height: 100vh;
      background-image: url(${bg});
      position:relative;
      main{
          flex: 1;
          background: rgba(252, 246, 249, 0.78);
          border: 3px solid #FFFFFF;
          backdrop-filter: blur(4.5px);
          border-radius: 32px;
          overflow-x: hidden;
          &::-webkit-scrollbar{
            width: 0;
          }
        }
`;

function App() {

  const[active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global);

  //func displayData
  const displayData = () => {
    switch(active){
      case 1: 
          return <Dashboard/>
      case 2:
          return <Dashboard/>
      case 3: 
          return <Income/>
      case 4:
          return <Expenses/>
      default:
          return <Dashboard/>                 
    }
  }
  

  return (
    <AppStyled className='App'>
      {/* <Orb/> */}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
        
      </MainLayout>
      
    </AppStyled>
  )
}

export default App

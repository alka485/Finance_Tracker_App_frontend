/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'

//BASEURL

const BASE_URL = "http://localhost:3008/api/v1"
const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    return<GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
}
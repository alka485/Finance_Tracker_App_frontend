/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const QuoteStyled = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            margin: 2rem;
            max-width: 500px;
            text-align: center;

            p {
                font-size: 1.25rem;
                color: #333;
                margin-bottom: 1rem;
            }

            span {
                font-size: 1rem;
                color: #666;
            }

            button {
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background-color: var(--color-accent);
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 1rem;

                &:hover {
                background-color: var(--color-green);
                }
            }
`;

const Quotes = () => {
    //console.log(import.meta.env.VITE_apiKey);
    const [quote, setQuote] = useState('');
    var category = 'inspirational'
    let apiUrl = ('https://api.api-ninjas.com/v1/quotes?category=' + category)


    const fetchQuote = async () => {
        try {
            const response = await axios.get(apiUrl,
            {
            headers:{'X-Api-Key': 'g3lkcQzH/MXAKoargfOuzA==nUUFcxL4LpRLfTBH'}
            });

            console.log(response.data[0].quote);
            const randomQuote = response.data[0].quote;
            setQuote(randomQuote);

        } catch(err){
            console.error('Error fetching quote', err)
        }
    };

    useEffect (() => {
        fetchQuote()

    },[]);
    
  return (
    <QuoteStyled>
        <p>{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
    </QuoteStyled>
  )
}

export default Quotes
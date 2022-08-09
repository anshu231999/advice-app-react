import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App(){

   // state= { advice: '' };
    const [advice,setAdvice]=useState('');


    
    const fetchQuote = () =>{
        axios.get('https://api.adviceslip.com/advice')
         .then((response) => {

                 // const { advice } = response.data.slip;
                  setAdvice(response.data.slip.advice);
               //   this.setState({ advice });
                  console.log(response.data.slip);
          
         })
         .catch((error) => {
                  console.log(error);
         });
    }

    useEffect(()=>{fetchQuote()

    },[]);




    return(
        <>
            <div className ="app"> 
                <div className= "card"> 
                  <h1 className= "heading"> {advice}</h1>
                   <button className="button" onClick={fetchQuote}>
                        <span>
                            ENLIGHTEN ME !
                        </span>
                   </button>
                </div>
            </div>
             
        
        </>
    )
}

export default App;
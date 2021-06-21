import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{

    state= { advice: '' };

    componentDidMount(){
        this.fetchQuote();
    }

    fetchQuote = () =>{
        axios.get('https://api.adviceslip.com/advice')
         .then((response) => {

                  const { advice } = response.data.slip;
                  this.setState({ advice });
                  console.log(response.data.slip);
          
         })
         .catch((error) => {
                  console.log(error);
         });
    }



    render(){
         const { advice } = this.state;
        return (
            <div className ="app"> 
                <div className= "card"> 
                  <h1 className= "heading"> {advice}</h1>
                   <button className="button" onClick={this.fetchQuote}>
                        <span>
                            ENLIGHTEN ME !
                        </span>
                   </button>
                </div>
            </div>
             
        );
    }
}

export default App;
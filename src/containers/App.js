import React, { useState, useEffect } from 'react';
import Quote from '../components/Quote';
import Spinner from '../components/Spinner';


const initialQuote = {
  text: 'Quote',
  author:'Author :)'
}

function App() {
  const[ quote, setQuote] = useState(initialQuote);
  const[ loading, setLoading] = useState(false);



  const updateQuote = async () => {
    setLoading(true);
    const url = 'https://breakingbadapi.com/api/quote/random';
    const res = await fetch(url);
    const [newQuote] = await res.json(); //destructuring para tomar el primer elemtno del array de la response

    const { quote: text, author} = newQuote; // destructuring again

    setQuote({
      text,
      author
    })

    setLoading(false);
  }

  useEffect( () => {
    updateQuote();
  }, [])
  // para poder realizar una llamada o ejecutar una funcion o preceso solo la primera vez que se renderiza un component
  //  necesitamos llamar al useEfect y pasarle en sus dependencias un arreglo vacio

  return (
    <div className="app">
      {/* <header className="App-header">
        <Nav />
        
      </header> */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => updateQuote()}>Get Another</button>

      { loading ? <Spinner /> : <Quote quote = { quote}/>}

    </div>
  );
}

export default App;

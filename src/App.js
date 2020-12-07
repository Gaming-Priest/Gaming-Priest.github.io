import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios'
import QuoteCard from './quote-card'

const App = () => {
  const [state, setState] = useState({
    getQuote:[],
    quote: '',
    author: '',
  });
  const END_POINT = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'


  // const Data = async () => {
  // const result = await fetch(END_POINT)
  //     .then(response => response.json())
  //     .then(data => data)
  //     .catch(error => console.log(error));
  // return result
  // }
  
  const Data = async ()=>{
    const results = await axios({
      method:'get',
      url:END_POINT
    })
    .then(res=>res.data)
    .catch(error=>console.log(error)) 
    setState({
      getQuote:results
    })
  }
  useEffect({
    Data()
  },[])
  
  console.log(state);
  return (
    <Fragment> 
      <QuoteCard /> 
    </Fragment>
  );
};

export default App;
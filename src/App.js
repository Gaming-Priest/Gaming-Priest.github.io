import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios'
import QuoteCard from './quote-card'

const App = () => {
  const [state, setState] = useState({
    quote: '',
    author: '',
  });
  const END_POINT = 'https://api.quotable.io/random'


  const getData = async ()=>{
    const results = await axios({
      method:'get',
      url:END_POINT
    })
    .then(res=>{
      return res.data;
    })
    .catch(error=>console.log(error)) 
    setState({
      quote:results.content,
      author:results.author
    })
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <Fragment> 
      <QuoteCard author={state.author} quote={state.quote} getData={getData}/> 
    </Fragment>
  );
};;

  export default App; 
// 
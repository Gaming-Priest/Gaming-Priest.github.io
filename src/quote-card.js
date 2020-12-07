import React from 'react';

const QuoteCard = ({quote,author,getData}) => {
    return ( 
        <div className="card-group">
          <div className="card">
            <div className="card-body quote-text">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <h4 className="card-text">{quote}</h4>
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </div>
            <div className="card-body quote-author">
              <h6 className="card-text">{author}</h6>
            </div>
            <div className="quote-buttons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <button className="btn btn-primary" onClick={getData}>New Quote</button>
            </div>
          </div>
        </div>
      )
    };
    export default QuoteCard;
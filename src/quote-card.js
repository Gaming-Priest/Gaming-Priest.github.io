import React from 'react';

const QuoteCard = () => {
    return ( 
        <div className="card-group">
          <div className="card">
            <div className="card-body quote-text">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <h1 className="card-text">ipsum dolor sit amet, consectetur adipisicing elit. Necessitati</h1>
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </div>
            <div className="card-body quote-author">
              <h5 className="card-text">author</h5>
            </div>
            <div className="quote-buttons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <button className="btn btn-primary">New Quote</button>
            </div>
          </div>
        </div>
      )
    };
    export default QuoteCard;
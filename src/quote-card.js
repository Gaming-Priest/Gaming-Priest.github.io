import React from 'react';
import './res/style.css'
import './res/bootstrap@5.0.0-alpha2.min.css'

const QuoteCard = ({quote,author,getData}) => {
    return ( 
        <div className="card-group" id="quote-box">
          <div className="card">
            <div className="card-body quote-text">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <h4 className="card-text" id="text">{quote}</h4>
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </div>
            <div className="card-body quote-author">
              <h6 className="card-text" id="author">>>{author}</h6>
            </div>
            <div className="quote-buttons">
              <a target="_blank" href="twitter.com/intent/tweet" id="tweet-quote"><i className="fab fa-twitter"></i></a>
              <button className="btn btn-primary" onClick={getData} id="new-quote">New Quote</button>
            </div>
          </div>
        </div>
      )
    };
    export default QuoteCard;
import React from 'react';
import { generateNewQuote } from "./Utils.js";

const Quote = ({quotesData, setQuotesData}) => {

  return (
    <div>
      <div className="quote">
        <p className='columns'>❝</p>
          <p onClick={() => generateNewQuote(setQuotesData)}>{quotesData.quote}</p>
          </div>
        <p className='author'>{quotesData.author}</p>
    </div>
  );

}

  export default Quote;
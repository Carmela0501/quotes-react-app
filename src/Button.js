import React from "react";
import { generateNewQuote } from "./Utils.js";


const Button = ({ quotesData, setQuotesData }) => {

  return (
    <div className="button-center">
      <button onClick={() => generateNewQuote(setQuotesData)}>New quote</button>
    </div>
  );
};

export default Button;
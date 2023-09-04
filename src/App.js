import './App.css';
import React, {useState, useEffect} from 'react';
import Quote from './Quote';
import Button from './Button';

function App() {
  const [quotesData, setQuotesData] = useState({quote: ""});
  useEffect(() => {
fetch (`https://breezy-fluorescent-vacation.glitch.me`)
.then(res => res.json())
.then((data) => {
  setQuotesData(data);
});
  }, []);

  return (
    <div className="main">
      <Quote quotesData = {quotesData} setQuotesData = {setQuotesData}/>
      <Button quotesData = {quotesData} setQuotesData = {setQuotesData}/>
    </div>
  );
}

export default App;
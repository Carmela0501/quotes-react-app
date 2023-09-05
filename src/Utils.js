const generateNewQuote = (func) => {
  fetch(`https://breezy-fluorescent-vacation.glitch.me`)
    .then(res => res.json())
    .then(data => {
      func(data);
    })
    .catch(error => {
      console.error("Error fetching new quote:", error);
    });
};

export {generateNewQuote};
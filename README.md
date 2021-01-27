# RandomQuotes.github.io
This project is a random quote generator that generates quotes when clicked of the Former President of USA.

The explanation of code:

getQuote()- in this function, we use fetch method to get the data from the Url-https://api.whatdoestrumpthink.com/api/v1/quotes/random.
.then- resolve the promise from the fetch method and second .then gives us access to the data.
I also utilize the catch function to get an error that might occur. 

displayQuote()- attaches the quotes gotten from the api to the screen. 

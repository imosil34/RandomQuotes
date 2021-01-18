 let quoteButton = document.querySelector('.new-quote')
  quoteButton.addEventListener('click', getQuote);
 
  var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
//function gets the quotes from the url using fetch 
// also adding error function 
function getQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayQuote(data.message);
    })
    .catch(function () {
      console.log("An error occurred");
    });
}
 
 
    
//function to display quote on the screen
  function displayQuote(quote) {
    let  quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;
  }
// calling this function so that page loads with a Random joke
  getQuote()

//   async function getQuote(){
//     try{
//       let response = await fetch(endpoint)
//       let data =  await response.json();
//      return data;
//     } catch (error){
//     console.log("An error has Occured")
//   }

// }


 

 
 
  



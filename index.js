// arr=[
//     {author:"Oscar Wilde",
//         quote:"Be yourself; everyone else is already taken"
//     },
//     {
//         author:" Marilyn Monroe",
//         quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
//     },
//     {
//         author:"Frank Zappa",
//         quote:"So many books, so little time"
//     },
//     {author:"Albert Einstein",
//         quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."

//     },
//     {
//         author:"Marcus Tullius Cicero",
//         quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."

//     }
// ]
function getQuote()
{
 var username=["Oscar Wilde", "Marilyn Monroe","Frank Zappa","Albert Einstein","Marcus Tullius Cicero"]  
 var quotes=["Be yourself; everyone else is already taken","I'm selfish, impatient and a little insecure", "I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","So many books, so little time",
    "Two things are infinite: the universe and human stupidity and I'm not sure about the universe."

 ]

 
 var quo  =Math.floor(Math.random() * quotes.length)

 var name =Math.floor(Math.random() * username.length)
 
 document.getElementById("quotes").innerHTML= quotes[quo]
 document.getElementById("username").innerHTML=username[name] 


}

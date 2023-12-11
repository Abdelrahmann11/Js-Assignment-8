var quote;
var oldQuote;
function Generator(){
    // console.log("Clicked");
    // console.log("****************");
    // console.log(" old Quote " + oldQuote)
    quote = Math.ceil(Math.random()* 10);
    // console.log(" Quote " + quote)
    while(quote == oldQuote){
        quote = Math.ceil(Math.random()* 10);
        // console.log(" new Quote " + quote);
        // console.log("Alertttttt");
    }
    // console.log(" newQuote out while " + quote);
    oldQuote = quote;
    // console.log(" old Quote " + oldQuote)
    
    switch(quote){
        case 1 : 
            document.getElementById("Quote").innerHTML = "“Be the change that you wish to see in the world.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Mahatma Gandhi";
            // console.log("“Be the change that you wish to see in the world.”")
            // console.log("― Mahatma Gandhi")
        break;
        case 2 : 
            document.getElementById("Quote").innerHTML = "“Be yourself; everyone else is already taken.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Oscar Wilde";
            // console.log("“Be yourself; everyone else is already taken.”")
            // console.log("― Oscar Wilde")
        break;
        case 3 : 
            document.getElementById("Quote").innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Albert Einstein";    
            // console.log("“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”")
            // console.log("― Albert Einstein")    
        break;
        case 4 : 
            document.getElementById("Quote").innerHTML = "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Marilyn Monroe";
            // console.log("“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”")
            // console.log("― Marilyn Monroe")    
        break;  
        case 5 : 
            document.getElementById("Quote").innerHTML = "“In three words I can sum up everything I've learned about life: it goes on.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Robert Frost";
            // console.log("“In three words I can sum up everything I've learned about life: it goes on.”")
            //     console.log("― Robert Frost")
        break;
        case 6 :
            document.getElementById("Quote").innerHTML = "“If you tell the truth, you don't have to remember anything.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Mark Twain";
            // console.log("“If you tell the truth, you don't have to remember anything.”")
            // console.log("― Mark Twain")
        break;  
        case 7 :
            document.getElementById("Quote").innerHTML = "“To live is the rarest thing in the world. Most people exist, that is all.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Oscar Wilde";
            // console.log("“To live is the rarest thing in the world. Most people exist, that is all.”")
            // console.log("― Oscar Wilde")
        break;
        case 8 : 
            document.getElementById("Quote").innerHTML = "“Live as if you were to die tomorrow. Learn as if you were to live forever.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Mahatma Gandhi";
            // console.log("“Live as if you were to die tomorrow. Learn as if you were to live forever.”")
            // console.log("― Mahatma Gandhi")
        break; 
        case 9 : 
        document.getElementById("Quote").innerHTML = "“It is better to be hated for what you are than to be loved for what you are not.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Andre Gide, Autumn Leaves";
        // console.log("“It is better to be hated for what you are than to be loved for what you are not.”")
        //         console.log("― Andre Gide, Autumn Leaves")
        break;
        case 10 : 
        document.getElementById("Quote").innerHTML = "“Always forgive your enemies; nothing annoys them so much.”";
            document.getElementById("QuoteAuthor").innerHTML = "-- Oscar Wilde";
        // console.log("“Always forgive your enemies; nothing annoys them so much.”")
        //         console.log("― Oscar Wilde")    
        break;   
    }
}
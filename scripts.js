

//Helper functions
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

//test 250407
//Our code
var cards=[
    {value: '2', image:'./images/2_of_clubs.png',matched: false},
    {value: '3', image:'./images/3_of_clubs.png',matched: false},
    {value: '2', image:'./images/2_of_clubs.png',matched: false},
    {value: '3', image:'./images/3_of_clubs.png',matched: false},
    {value: '9', image:'./images/9_of_clubs.png',matched: false},
    {value: '9', image:'./images/9_of_clubs.png',matched: false},
    {value: '4', image:'./images/4_of_clubs.png',matched: false},
    {value: '4', image:'./images/4_of_clubs.png',matched: false},
    {value: '5', image:'./images/5_of_clubs.png',matched: false},
    {value: '5', image:'./images/5_of_clubs.png',matched: false},
    {value: '7', image:'./images/7_of_clubs.png',matched: false},
    {value: '6', image:'./images/6_of_clubs.png',matched: false},
    {value: '7', image:'./images/7_of_clubs.png',matched: false},
    {value: '8', image:'./images/8_of_clubs.png',matched: false},
    {value: '6', image:'./images/6_of_clubs.png',matched: false},
    {value: '8', image:'./images/8_of_clubs.png',matched: false},
];

var cardEls=document.querySelectorAll('.card');
var firstGuess=null; //to store the first guess
var canGuess=true; //if the card.canGuess==false, that card can not be clicked
var flippedCards=0;

shuffle(cards);



cardEls.forEach(function (el, index){
        el.addEventListener('click', function (){
            
            if (index===firstGuess || cards[index].matched || !canGuess){
                alert('invalid guess'); //to avoid user from clicking on same card. Or users can not click the matched clicked cards;
                return;
                
            }
            
            
            var clickedCard=cards[index];
            el.setAttribute('src', clickedCard.image);
            
            
                if(firstGuess===null){
                    firstGuess=index;   
                    //alert('first guess');  for debugging purpose
                    
                } else{
                    
                    if(cards[firstGuess].value===cards[index].value){
                        cards[firstGuess].matched=true; // change the boolean value to be True
                        cards[index].matched=true; 
                        
                        
                         setTimeout(function(){
                             cardEls[firstGuess].setAttribute('src','./images/blank.png');
                             cardEls[index].setAttribute('src','./images/blank.png');
                             firstGuess=null;
                        },1000);
                        
                        
                                                       
                        
                        
                        
                       
                         
                        
                        
                        flippedCards+=2;
                        //alert("match");//its a match
                        
                        //Check for win and reset
                        if(flippedCards===cards.length){
                            restGame();
                        }
                        
                    }else{
                        canGuess=false;
                        
                        
                        setTimeout(function(){
                            cardEls[firstGuess].setAttribute('src','./images/card%20back%20black.png'); //Set the clicked card picture back to cover
                            cardEls[index].setAttribute('src','./images/card%20back%20black.png');
                            firstGuess=null;
                            canGuess=true;
                        },1500); //increse the displaying time period when clicked cards are not matched
                        
                        
                        
                        
                        //not a match    
                        //alert("No match");
                        
                    }
                    //alert('second guess'); for debugging purpose
                    
                    
                }
            
             
            
            //console.log(clickedCard); this line helps debugging with web browser
         });                  
          
    });




////////////////////////////////////////////////////////////////

function restGame(){
    
    alert("Congratulations! You finish this game.");
    canGuess=false;
    
    setTimeout(function(){
        
            firstGuess=null;
            canGuess=true;
            flippedCards=0;
    
            cardEls.forEach(function (el, index){
                el.setAttribute('src','./images/card%20back%20black.png');                

            });
    
            cards.forEach(function(card,index){
                card.matched=false;
            });
        
        
            shuffle(cards);
      
    }, 2000);  //delay 2 secs when game is finished
    
    
  
}


/*
document.querySelector('#reset').addEventListener('clicks',function{
    resetGame();                                              
                                                
})

*/


















    
    

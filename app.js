const card = document.getElementById("card");
const topCard = document.getElementById("top-card");
const midCard = document.getElementById("mid-card");
const botCard = document.getElementById("bot-card");
const newCardBtn = document.getElementById("btn1");
const startBtn = document.getElementById("btn2");
const stopBtn = document.getElementById("btn3");

//randoms:
function generateValue ()
{
    let num = Math.floor(Math.random()*13+1)

  return  num === 11
  ? "J"
  : num === 12
  ? "Q"
  : num === 13
  ? "K"
  : num;
}

function randomSuit ()
{
  let suit = Math.floor(Math.random()*4+1)
  
  if (suit == 1){ return "♠"}
  if (suit == 2){ return "♣"};
  if (suit == 3){ return "♦"};
  
  return "♥" 
}

//funciones

function generateCard ()
{
   let suit = randomSuit ();
   let value = generateValue ();

   topCard.innerHTML = suit;
   midCard.innerHTML = value;
   botCard.innerHTML = suit;

   if(suit === "♥" || suit === "♦")
   {
    card.className = "red";
   } 
   else 
   {
    card.className = "black"
   }
   card.classList.remove = "background"
}


let timer;

function startCards ()
{
generateCard();
timer = setInterval(generateCard, 3000);

newCardBtn.classList.toggle("hidden");
startBtn.classList.toggle("hidden");
stopBtn.classList.toggle("hidden");
}

function stopCards ()
{
    clearInterval(timer);

    newCardBtn.classList.toggle("hidden");
    startBtn.classList.toggle("hidden");
    stopBtn.classList.toggle("hidden");
}
let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let scissors = document.querySelector("#s");
let cs = "paper";
let u = 0;
let c = 0;
let output=document.createElement("p");
output.classList.add("output");

rock.addEventListener("click", () => 
{
    if (cs === "rock") 
	{
		
		output.innerText="Your choice= rock, Computer choice= rock\n"+
		 "It's a draw\n"+"You ="+ u+ " Computer ="+ c;
		 
		 document.querySelector("#con").append(output);
       
    }
	else if (cs === "paper") 
	{
        c++;
		output.innerText="Your choice= rock, Computer choice= paper\n" +
		"Paper defeats rock\n" + "You ="+ u+ " Computer ="+ c;
		document.querySelector("#con").append(output);
        
    }
	else if (cs === "scissors")
	{
        u++;
		output.innerText="Your choice= rock, Computer choice= scissors\n"+
		"Rock defeats scissors\n"+ "You ="+ u+ " Computer ="+ c;
		document.querySelector("#con").append(output);
       
    }
});

paper.addEventListener("click", () => 
{
    if (cs === "paper") 
	{
        
        output.innerText="Your choice= paper, Computer choice= paper\n"+
        "It's a draw\n" +"You ="+ u+" Computer ="+ c;
		document.querySelector("#con").append(output);
    } 
	else if (cs === "rock")
	{
        u++;
		output.innerText="Your choice= paper, computer choice= rock\n"+
        "Paper defeats rock\n"+"You ="+ u+ " Computer ="+ c;
		document.querySelector("#con").append(output);
		 
    } 
	else if (cs === "scissors") 
	{
        c++;
       
		output.innerText="Your choice= paper, Computer choice= scissors\n"+
     "Scissors defeats paper\n"+"You ="+ u+ " Computer ="+ c;
		 document.querySelector("#con").append(output);
		
    }
});

scissors.addEventListener("click", () => 
{
    if (cs === "scissors")
	{
        
       
		output.innerText="Your choice= scissors, Computer choice= scissors\n"+
		"It's a draw\n"+"You ="+ u+ " Computer ="+ c;
		document.querySelector("#con").append(output);
    } 
	else if (cs === "paper") 
	{
        u++;
     output.innerText= "Your choice= scissors, Computer choice= paper\n"+
       "Scissors defeats paper\n"+"You ="+ u+" Computer ="+ c;
		document.querySelector("#con").append(output);
    } 
	else if (cs === "rock")
	{
        c++;
		output.innerText="Your choice= scissors, Computer choice= rock\n"+
		 "Rock defeats scissors\n"+"You ="+ u+ " Computer ="+ c;
		document.querySelector("#con").append(output);
		
       
		
    }
});

let helpButton = document.getElementById("help");
helpButton.addEventListener("click", () => {
    // Display help information, e.g., show a modal with instructions
    alert("Rock Paper Scissors Instructions:\n1. Click on one of the icons (rock, paper, or scissors).\n2. See who wins against the computer!");
});
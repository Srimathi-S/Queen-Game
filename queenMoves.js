let positionLog = 

[["a8","b8","c8","d8","e8","f8","g8","h8"],

["a7","b7","c7","d7","e7","f7","g7","h7"],

["a6","b6","c6","d6","e6","f6","g6","h6"],

["a5","b5","c5","d5","e5","f5","g5","h5"],

["a4","b4","c4","d4","e4","f4","g4","h4"],

["a3","b3","c3","d3","e3","f3","g3","h3"],

["a2","b2","c2","d2","e2","f2","g2","h2"],

["a1","b1","c1","d1","e1","f1","g1","h1"]];

//Intializing Queen object
let  queen  =
{
    direction:"S",
    x_pos:0,
    y_pos:0,
}

//Getting input
var numberOfTimes = Number(window.prompt("Enter the number of time you want to play "));
alert("The queen can be moved "+numberOfTimes+" times." );
while(numberOfTimes--)
{
input = window.prompt("Enter the direction and number of steps: ");
moveQueen(input.toUpperCase());
}


//Moving Queen
function moveQueen(input)
{
    //Seperating input into direction and number of moves(Steps)
    var myArray = input.split(/([0-9])/);
    queen.direction=myArray[0];
    var numberOfmoves=Number(myArray[1]);
    
    //Moving queen
    var x_val=Number(queen.x_pos);
    var  y_val=Number(queen.y_pos);
    if(queen.direction==="N")
    {
        x_val-=numberOfmoves
    }
    else if(queen.direction==="S")
    {
        x_val+=numberOfmoves
    }
    else if(queen.direction==="E")
    {
        y_val+=numberOfmoves
    }
    else if(queen.direction==="W")
    {
        y_val-=numberOfmoves
    }
    else if(queen.direction==="NW")
    {
        y_val-=numberOfmoves
        x_val-=numberOfmoves
    }
    else if(queen.direction==="NE")
    {
        y_val+=numberOfmoves
       x_val-=numberOfmoves
    }
    else if(queen.direction==="SE")
    {
        x_val+=numberOfmoves
        y_val+=numberOfmoves
    }
    else if(queen.direction=="SW")
    {
       x_val+=numberOfmoves
       y_val-=numberOfmoves
    }
    else
    {
        alert("Undefined direction");
        return;
    }
    if(x_val<0 || y_val<0 || x_val>=8 || y_val>=8)
    {
        alert("Undefined position");
    }
    else
    {
        queen.x_pos=Number(x_val);
        queen.y_pos=Number(y_val);
        alert("Queen is in "+String(positionLog[Number(queen.x_pos)][Number(queen.y_pos)]));
       
    }
   
}
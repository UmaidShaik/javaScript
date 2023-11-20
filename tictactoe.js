let playTicTacToe = (symbol,cellNumber)=>{ 
 
    if((symbol == "x" || symbol == "o") && typeof cellNumber == "number" && board[cellNumber]=="z" && !isGameOver){ 
        board[cellNumber] = symbol 
        if(checkwinner(board)){ 
            console.log("Winner is", symbol); 
        } 
        else if (isBoardFull){ 
            console.log("DRAW"); 
        } 
    } 
    return board 
} 
 
let checkwinner=(board)=>{ 
    if(board[0]==board[4] && board[4]==board[8] && board[0]!="z" && board[4]!="z" && board[8]!="z"){ 
        isGameOver=true 
        return isGameOver 
    } 

 
    if(board[2]==board[4] && board[4]==board[6] && board[2]!="z" && board[4]!="z" && board[6]!="z"){ 
        isGameOver=true 
        return isGameOver 
    } 
 
    if(board[0]==board[3]&& board[3]==board[6] && board[0]!="z" && board[3]!="z" && board[6]!="z"){ 
        isGameOver=true 
        return isGameOver 
    } 
 
    if(board[1]==board[4] && board[4]==board[7] && board[1]!="z" && board[4]!="z" && board[7]!="z"){ 
        isGameOver=true 
        return isGameOver 
    } 
 
    if(board[2]==board[5] && board[5]==board[8] && board[2]!="z" && board[5]!="z" && board[8]!="z"){ 
        isGameOver=true 
        return isGameOver 
    } 
 
    if(board[0]==board[3] && board[3]==board[6] && board[0]!="z" && board[3]!="z" && board[6]!="z"){ 
        isGameOver=true 
        return isGameOver 
    } 
 
    if(board[1]==board[4] && board[4]==board[7] && board[1]!="z" && board[4]!="z" && board[7]!="z"){ 
        isGameOver=true 
        return isGameOver 
    } 
 
    if(board[2]==board[5] && board[5]==board[8] && board[2]!="z" && board[5]!="z" && board[8]!="z"){ 
        isGameOver=true 
        return isGameOver 
    } 
 
} 
 
let BoardFull =(board)=>{ 
    if(board[0]!="z",board[1]!="z",board[2]!="z",board[3]!="z",board[4]!="z",board[5]!="z",board[6]!="z",board[7]!="z",board[8]!="z",board[9]!="z"){ 
        isBoardFull != true
        
    } 
} 
 
let isBoardFull = false 
 
let isGameOver = false; 
let board = ["z","z","z","z","z","z","z","z","z"] 
 
playTicTacToe("o",0) 
playTicTacToe("x",2) 
playTicTacToe("o",6) 
playTicTacToe("x",5)
playTicTacToe("o",3)
playTicTacToe("x",7)






# j_chess

A javascript library for displaying a chess board on a website. Sample here https://pip36.github.io/j_chess/ 
The library produces a chessboard with validated moves, and can be played by a human player. Currently it does not have an AI chess engine, it is simply a move validator.

The library is dependent on jQuery in its current state, and will need this included before chess.js to work.

There also needs to be an object to attach the board to with id "chess"

    <div id="chess"></div>
    
Stylesheet is included for coloring UI elements e.g(possible moves, checks)

A simple board
---------------------------
This will generate a standard chessboard.

    $(document).ready(function(){
	     var chess = new Chess();
         chess.setup();
	     chess.new();
    });
    
**.new()** accepts a FEN string to generate a custom starting position

    chess.new("2bqkbn1/2pppp2/np2N3/r3P1p1/p2N2B1/5Q2/PPPPKPP1/RNB2r2");
 
(Mate in 2, white to move, by the way)
![Example](/ChessPosition.JPG)

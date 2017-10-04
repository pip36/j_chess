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
-------------------------------------   
**.new(string)** - Optionally accepts a FEN position to generate a custom starting position.

    chess.new("2bqkbn1/2pppp2/np2N3/r3P1p1/p2N2B1/5Q2/PPPPKPP1/RNB2r2");
 
![Example](/ChessPosition.JPG)
----------------------------------------
**.setPosition(string)** - Accepts a full fen string, starting play from the given position.

	chess.setPosition('rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2');
----------------------------------------
**.makeMove(start,destination)** - Make a move for the current player if it is valid (accepts lower case strings)
	
	chess.makeMove('e2', 'e4');
---------------------------------------
**.moveSAN(sanstring)** - Make a move given the standard algebraic notation string. (string can optionally include captures and check)
	
	chess.moveSAN('nxf2+');
--------------------------------------

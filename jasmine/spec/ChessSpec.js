describe("chess", function() {
  var player;
  var song;
  var chess;

  beforeEach(function() {
    player = new Player();
    song = new Song();
    chess = new Chess();
    chess.setup();
  });

  it("should be able to generate a standard chessboard", function() {
    chess.new();
    expect(chess.getBoardString()).toEqual("rnbqkbnrpppppppp00000000000000000000000000000000PPPPPPPPRNBQKBNR");
  });

  it("should be able to generate a custom start position", function() {
  	//All Empty
    chess.new("8/8/8/8/8/8/8/8");
    expect(chess.getBoardString()).toEqual("0000000000000000000000000000000000000000000000000000000000000000");
    //Correct row column alignment
    chess.new("p7/p7/p7/p7/7p/7p/7p/7p");
    expect(chess.getBoardString()).toEqual("p0000000p0000000p0000000p00000000000000p0000000p0000000p0000000p");
    //Multiple spaces within rows
    chess.new("1p1p1p1p/p1p1p1p1/1p4p1/p1p2p1p/6p1/1p6/8/pppppppp");
    expect(chess.getBoardString()).toEqual("0p0p0p0pp0p0p0p00p0000p0p0p00p0p000000p00p00000000000000pppppppp");
  });

  it("should be able to generate a valid game from full fen string", function() {
  	//standard start
    chess.setPosition("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    expect(chess.getBoardString()).toEqual("rnbqkbnrpppppppp00000000000000000000000000000000PPPPPPPPRNBQKBNR");
    expect(chess.getGame().currentPlayer).toEqual(1);
    expect(chess.getGame().whiteCastleKing).toEqual(true);
    expect(chess.getGame().whiteCastleQueen).toEqual(true);
    expect(chess.getGame().blackCastleKing).toEqual(true);
    expect(chess.getGame().blackCastleQueen).toEqual(true);
    expect(chess.getGame().enPassantSquare).toEqual(null);

    chess.setPosition("rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2");
  	expect(chess.getBoardString()).toEqual("rnbqkbnrpp0ppppp0000000000p000000000P00000000000PPPP0PPPRNBQKBNR");
    expect(chess.getGame().currentPlayer).toEqual(1);
    expect(chess.getGame().whiteCastleKing).toEqual(true);
    expect(chess.getGame().whiteCastleQueen).toEqual(true);
    expect(chess.getGame().blackCastleKing).toEqual(true);
    expect(chess.getGame().blackCastleQueen).toEqual(true);
    expect(chess.getGame().enPassantSquare).toEqual([2,2]);

    chess.setPosition("rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR b - c6 0 2");
  	expect(chess.getBoardString()).toEqual("rnbqkbnrpp0ppppp0000000000p000000000P00000000000PPPP0PPPRNBQKBNR");
    expect(chess.getGame().currentPlayer).toEqual(-1);
    expect(chess.getGame().whiteCastleKing).toEqual(false);
    expect(chess.getGame().whiteCastleQueen).toEqual(false);
    expect(chess.getGame().blackCastleKing).toEqual(false);
    expect(chess.getGame().blackCastleQueen).toEqual(false);

    chess.setPosition("rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR b Kk c6 0 2");
  	expect(chess.getBoardString()).toEqual("rnbqkbnrpp0ppppp0000000000p000000000P00000000000PPPP0PPPRNBQKBNR");
    expect(chess.getGame().whiteCastleKing).toEqual(true);
    expect(chess.getGame().whiteCastleQueen).toEqual(false);
    expect(chess.getGame().blackCastleKing).toEqual(true);
    expect(chess.getGame().blackCastleQueen).toEqual(false);

    chess.setPosition("rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR b Qq c6 0 2");
  	expect(chess.getBoardString()).toEqual("rnbqkbnrpp0ppppp0000000000p000000000P00000000000PPPP0PPPRNBQKBNR");
    expect(chess.getGame().whiteCastleKing).toEqual(false);
    expect(chess.getGame().whiteCastleQueen).toEqual(true);
    expect(chess.getGame().blackCastleKing).toEqual(false);
    expect(chess.getGame().blackCastleQueen).toEqual(true);
  });

  it("should be able to make a valid move", function() {
    chess.new();
    chess.makeMove('e2', 'e4');
    expect(chess.getBoardString()).toEqual("rnbqkbnrpppppppp00000000000000000000P00000000000PPPP0PPPRNBQKBNR");

    chess.makeMove('b8', 'c6');
    expect(chess.getBoardString()).toEqual("r0bqkbnrpppppppp00n00000000000000000P00000000000PPPP0PPPRNBQKBNR");
  });

  it("should not allow invalid moves", function() {
    chess.new();
    chess.makeMove('e2', 'e5');
    expect(chess.getBoardString()).toEqual("rnbqkbnrpppppppp00000000000000000000000000000000PPPPPPPPRNBQKBNR");

    chess.makeMove('a8', 'a6');
    expect(chess.getBoardString()).toEqual("rnbqkbnrpppppppp00000000000000000000000000000000PPPPPPPPRNBQKBNR");
  });



});
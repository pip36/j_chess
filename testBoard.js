$(document).ready(function(){
	var chess = new Chess();
	chess.setup();
	chess.new("r1bqkb1r/pppppppp/2n1n3/8/8/2N1N3/PPPPPPPP/R1BQKB1R");
	//chess.setPosition("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - -");
	//chess.loadPng("hi");
	console.log(chess.getPiecePositions("n"));
	$('button').click(function(){
		var s1 = $('#s1').val();
		chess.moveSAN(s1);
	});
});

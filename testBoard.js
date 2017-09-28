$(document).ready(function(){
	var chess = new Chess();
	chess.setup();
	//chess.new("2bqkbn1/2pppp2/np2N3/r3P1p1/p2N2B1/5Q2/PPPPKPP1/RNB2r2");
	chess.setPosition("r3k2r/pp1ppppp/8/8/2pP4/8/PPPPPPPP/R3K2R b - d3");

	$('button').click(function(){
		var s1 = $('#s1').val();
		var s2 = $('#s2').val();
		chess.makeMove(s1,s2);
	});
});

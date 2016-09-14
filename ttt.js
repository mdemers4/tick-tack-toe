$(function() {
    var winableScores = [155, 439, 781, 455, 581, 481, 305]
    var turn = 0;
    var playerXScore = 0;
    var playerOScore = 0;
    $('.square').on('click', function(){
        var this_square = $(this);
        if ($('table').data('game-active') === 'false'){
            return
        }
        if (turn >= 8)
            $('h1').text('Cats Game')

        this_square.data('position'); // in our html this looks like data-position 

        if (this_square.text() === ''){
            if (turn % 2 === 0) {
                this_square.text('X');
                playerXScore += Number($(this).attr('value'))
            } else{
                this_square.text('O');
                playerOScore += Number($(this).attr('value'))
            }
            turn ++;
        }
        checkWinner()
    });

    function checkWinner(){
        for(i =0, n = winableScores.length; i < n; i++){
            if(playerOScore === winableScores[i]){
                $('h1').text('player O wins')
                $('table').data('game-active', 'false')
            }
            if(playerXScore === winableScores[i]){
                $('h1').text('player X wins')
                $('table').data('game-active', 'false') 
            }
        }
    }

});

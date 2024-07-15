const whoWon = require('../RPS.js');

describe("whoWon", function(){

 
    test("Paper should beat rock", function(){
        let output = whoWon("rock", "paper");
        expect(output).toEqual('Player 2 wins!');
    });

    test("Paper should beat rock", function(){
        let output = whoWon("paper", "rock");
        expect(output).toEqual('Player 1 wins!');
    });

    test("Lets test a tie", function(){
        let output = whoWon("rock", "rock");
        expect(output).toEqual('TIE!');
    });

    test("Lets test a non correct choice, player 1", function(){
        let output = whoWon("toast", "rock");
        expect(output).toEqual('Someone did not pick rock, paper, or scissors');
    });
 

    test("Lets test a non correct choice, player 2", function(){
        let output = whoWon("rock", "toast");
        expect(output).toEqual('Someone did not pick rock, paper, or scissors');
    });
 
});

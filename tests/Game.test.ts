import {describe, expect, it, jest} from "@jest/globals";
import {Game} from "../game/Game";
import {Die} from "../game/Die";

describe('Game class', () => {
    const testGame: Game = new Game(1, 100, ['61642e62-f71b-4f31-a77f-db35b9ff1e83', '9bc61fec-d4da-4952-8359-9ed36777250e']);

    it('should create a Player for each id passed to the constructor', function () {
        expect(Object.keys(testGame.players)).toEqual(['61642e62-f71b-4f31-a77f-db35b9ff1e83', '9bc61fec-d4da-4952-8359-9ed36777250e']);
    });

    it('should be able to start the game', function () {
        testGame.started = true;
        expect(testGame.started).toEqual(true);
    });

    it('should be able to register players', function () {
        testGame.registerPlayer('791d5d73-a597-451e-ac22-1b968d00bb80');
        expect(Object.keys(testGame.players)).toEqual(['61642e62-f71b-4f31-a77f-db35b9ff1e83', '9bc61fec-d4da-4952-8359-9ed36777250e', '791d5d73-a597-451e-ac22-1b968d00bb80']);
        expect(testGame.players['791d5d73-a597-451e-ac22-1b968d00bb80'].token.position).toEqual(1);
    });

    it('should be able to move a player', function () {
        testGame.movePlayer('61642e62-f71b-4f31-a77f-db35b9ff1e83');
        expect(testGame.players['61642e62-f71b-4f31-a77f-db35b9ff1e83'].token.position).not.toEqual(1);
    });

    it('should be able to end the game when a token reaches the final square', function () {
        const winGame: Game = new Game(1, 7, ['61642e62-f71b-4f31-a77f-db35b9ff1e83']);
        jest.spyOn(Die, 'Roll').mockReturnValue(6);
        winGame.movePlayer('61642e62-f71b-4f31-a77f-db35b9ff1e83');
        expect(winGame.players['61642e62-f71b-4f31-a77f-db35b9ff1e83'].token.position).toEqual(7);
        expect(winGame.winner.id).toEqual('61642e62-f71b-4f31-a77f-db35b9ff1e83');
    });
});
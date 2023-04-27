import {Player} from "./Player";
import {Die} from "./Die";

interface Players {
    [key: string]: Player;
}
export class Game {
    private _started: boolean;
    private readonly beginPosition: number;
    private readonly endPosition: number;
    private _players: Players;
    private _winner: Player;

    constructor(beginPosition: number, endPosition: number, players: string[]) {
        this.started = false;
        this.beginPosition = beginPosition;
        this.endPosition = endPosition;
        players.map(id => this.registerPlayer(id))
    }

    public registerPlayer(id: string) {
        this._players = {
            ...this._players,
            [id]: new Player(id, this.beginPosition)
        }
    }

    public movePlayer (playerId: string) {
        const player: Player = this._players[playerId];
        if (!player) return;

        player.token.move(Die.Roll(), this.endPosition);

        if (this.isWinConditionMet(player)) {
            this.gameOver(player);
        }
    }

    private isWinConditionMet(player: Player): boolean {
        return player.token.position === this.endPosition;
    }

    private gameOver(winner: Player) {
        this.started = false;
        this._winner = winner;
    }

    get players(): Players {
        return this._players;
    }

    get started(): boolean {
        return this._started;
    }

    set started(value: boolean) {
        this._started = value;
    }

    get winner(): Player {
        return this._winner;
    }
}
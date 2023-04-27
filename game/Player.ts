import {Token} from "./Token";

export class Player {
    private _id: string;
    private readonly _token: Token;

    constructor(id: string, startPosition: number) {
        this._id = id;
        this._token = new Token(startPosition);
    }

    get token(): Token {
        return this._token;
    }

    get id(): string {
        return this._id;
    }
}
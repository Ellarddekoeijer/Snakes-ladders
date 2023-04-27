import {DICE_LIMIT} from "./Die";

export class Token {
    private _position: number;

    constructor(startPosition: number) {
        this.position = startPosition;
    }

    public move(moveAmount: DICE_LIMIT, winPosition: number): void {
        const newPos = this.position + moveAmount;
        if (this.validatePosition(newPos, winPosition)) {
            this.position = newPos;
        }
    }

    private validatePosition(desiredPosition: number, winPosition: number):boolean {
        return desiredPosition <= winPosition;
    }

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }
}
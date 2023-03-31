import Color from './Color';
import Piece from './Piece';

export default class Square {
    private _piece: Piece | null;
    private _position: [number, number];
    private _color: Color;

    public constructor(color: Color, x: number, y: number) {
        this._color = color;
        this._piece = null;
        this._position = [x, y];
    }

    public empty(): boolean {
        return this._piece === null;
    }

    public get piece(): Piece | null {
        return this._piece;
    }

    public set piece(piece: Piece | null) {
        this._piece = piece;
    }

    public get color(): Color {
        return this._color;
    }

    public get x(): number {
        return this._position[0];
    }

    public get y(): number {
        return this._position[1];
    }

    public get position(): [number, number] {
        return this._position;
    }
}
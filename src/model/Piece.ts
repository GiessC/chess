import Color from './Color';
import PieceType from './PieceType';

export default class Piece {
    private _type: PieceType;
    private _color: Color;
    private hasMoved: boolean;

    public constructor(type: PieceType, color: Color) {
        this._type = type;
        this._color = color;
        this.hasMoved = false;
    }

    public canMoveTo(row: number, col: number): boolean {
        return true;
    }

    public get color(): Color {
        return this._color;
    }

    public get type(): PieceType {
        return this._type;
    }
}
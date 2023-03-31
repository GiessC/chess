import Board from "./Board";
import Color from "./Color";

enum GameState {
    IN_PROGRESS,
    CHECK,
    CHECKMATE,
    STALEMATE,
    DRAW
}

export default class Game {
    private _board: Board;
    private currentPlayer: Color;
    private state: GameState;
    private moveCount: number;

    public constructor() {
        this._board = new Board();
        this.currentPlayer = Color.WHITE;
        this.state = GameState.IN_PROGRESS;
        this.moveCount = 0;
    }

    public isCheckmate() {
        return false;
    }

    public isCheck() {
        return false;
    }

    public isStalemate() {
        return false;
    }

    public isDraw() {
        return false;
    }

    public move(startRow: number, startCol: number, endRow: number, endCol: number): boolean {
        const success = this._board.move(this.currentPlayer, startRow, startCol, endRow, endCol);

        if (!success)
            return false;

        this.currentPlayer = this.currentPlayer === Color.WHITE ? Color.BLACK : Color.WHITE;
        this.moveCount++;

        if (this.isCheckmate()) {
            this.state = GameState.CHECKMATE;
        } else if (this.isCheck()) {
            this.state = GameState.CHECK;
        } else if (this.isStalemate()) {
            this.state = GameState.STALEMATE;
        } else if (this.isDraw()) {
            this.state = GameState.DRAW;
        } else {
            this.state = GameState.IN_PROGRESS;
        }

        return true;
    }

    public get board(): Board {
        return this._board;
    }
}
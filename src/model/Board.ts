import Color from './Color';
import Piece from './Piece';
import PieceType from './PieceType';
import Square from './Square';

const initializeBlackPieces = (squares: Square[][]) => {
    squares[0][0].piece = new Piece(PieceType.ROOK, Color.BLACK);
    squares[0][1].piece = new Piece(PieceType.KNIGHT, Color.BLACK);
    squares[0][2].piece = new Piece(PieceType.BISHOP, Color.BLACK);
    squares[0][3].piece = new Piece(PieceType.QUEEN, Color.BLACK);
    squares[0][4].piece = new Piece(PieceType.KING, Color.BLACK);
    squares[0][5].piece = new Piece(PieceType.BISHOP, Color.BLACK);
    squares[0][6].piece = new Piece(PieceType.KNIGHT, Color.BLACK);
    squares[0][7].piece = new Piece(PieceType.ROOK, Color.BLACK);

    for (let col = 0; col < 8; col++) {
        squares[1][col].piece = new Piece(PieceType.PAWN, Color.BLACK);
    }
};

const initializeWhitePieces = (squares: Square[][]) => {
    squares[7][0].piece = new Piece(PieceType.ROOK, Color.WHITE);
    squares[7][1].piece = new Piece(PieceType.KNIGHT, Color.WHITE);
    squares[7][2].piece = new Piece(PieceType.BISHOP, Color.WHITE);
    squares[7][3].piece = new Piece(PieceType.QUEEN, Color.WHITE);
    squares[7][4].piece = new Piece(PieceType.KING, Color.WHITE);
    squares[7][5].piece = new Piece(PieceType.BISHOP, Color.WHITE);
    squares[7][6].piece = new Piece(PieceType.KNIGHT, Color.WHITE);
    squares[7][7].piece = new Piece(PieceType.ROOK, Color.WHITE);

    for (let col = 0; col < 8; col++) {
        squares[6][col].piece = new Piece(PieceType.PAWN, Color.WHITE);
    }
};

export default class Board {
    private _squares: Square[][];

    public constructor() {
        this._squares = [];

        let white = true;
        for (let row = 0; row < 8; row++) {
            this._squares[row] = [];
            for (let col = 0; col < 8; col++) {
                this._squares[row][col] = new Square(white ? Color.WHITE : Color.BLACK, row, col);
                white = !white;
            }
            white = !white;
        }

        initializeBlackPieces(this._squares);
        initializeWhitePieces(this._squares);
    }

    public move(currentPlayer: Color, startRow: number, startCol: number, endRow: number, endCol: number): boolean {
        const startSquare = this._squares[startRow][startCol];
        const endSquare = this._squares[endRow][endCol];

        if (
            startSquare.empty() ||
            startSquare.piece?.color !== currentPlayer ||
            endSquare.piece?.color === currentPlayer ||
            !startSquare.piece?.canMoveTo(endRow, endCol)
        )
            return false;

        endSquare.piece = startSquare.piece;
        startSquare.piece = null;

        return true;
    }

    public get squares(): Square[][] {
        return this._squares;
    }

    public set squares(value: Square[][]) {
        this._squares = value;
    }
}
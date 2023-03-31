import SquareModel from '../model/Square';
import '../styles.scss';

interface SquareProps {
    square: SquareModel;
    selectedSquare: SquareModel | null;
    setSelectedSquare: Function;
}

const Square = ({ square, selectedSquare, setSelectedSquare }: SquareProps) => {
    return (
        <div
            className={`chessSquare ${square.color} ${!square.empty() && 'hasPiece'}`}
            onDrop={() => {
                console.log(`Dropped on ${square.x + 1} ${square.y + 1}`)
                square.piece = selectedSquare!.piece
            }}
            onDragOver={(e) => e.preventDefault()}
        >
            {!square.empty() &&
                <img
                    className='chessPiece'
                    loading='eager'
                    alt={square.piece?.type}
                    src={`/images/pieces/${square.piece?.color}/${square.piece?.type}.png`}
                    onDragStart={() => {
                        setSelectedSquare(square);
                    }}
                    onDragEnd={() => {
                        square.piece = null;
                    }}
                    draggable
                />
            }
        </div>
    )
};

export default Square;
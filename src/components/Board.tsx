import { useEffect, useState } from 'react';
import BoardModel from '../model/Board';
import SquareModel from '../model/Square';
import Square from "./Square";

interface BoardProps {
    board: BoardModel | undefined;
}

const Board = ({ board }: BoardProps) => {
    const [selectedSquare, setSelectedSquare] = useState<SquareModel | null>(null);

    useEffect(() => {
        if (!selectedSquare || !board)
            return;
        console.log('Selected Square', selectedSquare);
    }, [selectedSquare, board]);

    return (
        <div className='chessBoard'>
            {
                board?.squares.map((row) => {
                    return (
                        row.map((square) => {
                            return (
                                <Square
                                    key={`${square.x}-${square.y}`}
                                    square={square}
                                    setSelectedSquare={setSelectedSquare}
                                    selectedSquare={selectedSquare}
                                />
                            )
                        })
                    )
                })
            }
        </div>
    );
}

export default Board;
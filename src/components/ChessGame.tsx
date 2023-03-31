import { useEffect, useState } from "react";
import Game from "../model/Game";
import Board from "./Board";

const ChessGame = () => {
    const [game, setGame] = useState<Game | null>(null);

    useEffect(() => {
        setGame(new Game());
    }, []);

    return (
        <div>
            <Board
                board={game?.board}
            />
        </div>
    );
}

export default ChessGame;
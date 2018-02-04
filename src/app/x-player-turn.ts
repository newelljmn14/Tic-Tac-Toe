import { GameState } from './game-state';
import { TileState } from './tile-state.enum';
import { Players } from './players';
import { YPlayerTurn } from "./y-player-turn";
import { EndGameState } from "./end-game-state";

export class XPlayerTurn extends GameState {
    private nextPlayerState: YPlayerTurn;

    public playTurn(row: number, column: number): GameState {
        if (this.validateMove(row, column)) {
            this.board[row][column] = TileState.x;
            if (this.validateGameOver()) {
                return new EndGameState(this.board, null);
            }
            
            return new YPlayerTurn(this.board);
        } else {
            console.log("That is an invalid move; Please try again.");

            return new XPlayerTurn(this.board);
        }
    }

    constructor(board: TileState[][]) {
        super(board, Players.y);
    }
}
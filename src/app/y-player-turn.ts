import { GameState } from './game-state';
import { TileState } from './tile-state.enum';
import { Players } from './players';

export class YPlayerTurn extends GameState {
    public playTurn(row: number, column: number): GameState {
        this.board[row][column] = TileState.y;
    }

    constructor(board: TileState[][]) {
        super(board, Players.y);
    }
}

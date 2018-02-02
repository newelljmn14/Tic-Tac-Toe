import { GameState } from './game-state';
import { TileState } from './tile-state.enum';
import { Players } from './players';

export class InitialGameState extends GameState {
    playTurn(row: number, column: number): GameState {
        this.board[row][column] = TileState.x;

        return YPlayersTurn;
    }

    constructor() {
        const board = [
            [TileState.none, TileState.none, TileState.none],
            [TileState.none, TileState.none, TileState.none],
            [TileState.none, TileState.none, TileState.none]
        ];
        super(board, Players.x);
    }
}

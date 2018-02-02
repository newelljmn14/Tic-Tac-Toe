import { Players } from './players';
import { TileState } from './tile-state.enum';

export abstract class GameState {
    public abstract playTurn(row: number, column: number): GameState;

    public currentPlayerTurn(): Players {
        return this._currentPlayer;
    }

    protected validateTurn(row: number, column: number): boolean {
        return this.board[row][column] === TileState.none;
    }

    constructor(public board: TileState[][], private _currentPlayer: Players) {

    }
}

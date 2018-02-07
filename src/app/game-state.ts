import { Players } from './players';
import { TileState } from './tile-state.enum';
import { EndGameState } from './end-game-state';

export abstract class GameState {
    public abstract playTurn(row: number, column: number): GameState;

    public currentPlayerTurn(): Players {
        return this._currentPlayer;
    }

    protected validateMove(row: number, column: number): boolean {
        return this.board[row][column] === TileState.none;
    }

    protected validateGameOver(): boolean {
        if (this.checkHorizontalWinConditionsOnRow(0, 0, 1) ||
            this.checkHorizontalWinConditionsOnRow(1, 0, 1) ||
            this.checkHorizontalWinConditionsOnRow(2, 0, 1)) {
            return true;
        }

        // checkVerticalWinConditions(0, 1, 2);
        // checkDiagonalWinCondition(0);
    }

    constructor(public board: TileState[][], private _currentPlayer: Players) {

    }

    private checkHorizontalWinConditionsOnRow(rowBeingChecked, recurseConditionalColumn, numberIdendticalTileStates) {
        // let rowBeingChecked: number = 0

        if (numberIdendticalTileStates === 3) {
            console.log('win condition achieved');
            return true;
        } else if (this.board[rowBeingChecked][recurseConditionalColumn] === this.board[rowBeingChecked][recurseConditionalColumn + 1]) {
            if (this.board[rowBeingChecked][recurseConditionalColumn] !== TileState.none) {
            return this.checkHorizontalWinConditionsOnRow(rowBeingChecked, recurseConditionalColumn + 1, numberIdendticalTileStates + 1);
            }
        } else {
            console.log('no win condition achieved');
            return false;
        }
    }

    private checkVerticalWinConditionsOnColumn(columnBeingChecked, recurseConditionalRow, numberIdendticalTileStates) {
        if (numberIdendticalTileStates === 3) {
            console.log('win condition achieved');
            return true;
        } else if (this.board[recurseConditionalRow][columnBeingChecked] === this.board[recurseConditionalRow + 1][columnBeingChecked]) {
            if (this.board[recurseConditionalRow][columnBeingChecked] !== TileState.none) {
            return this.checkVerticalWinConditionsOnColumn(recurseConditionalRow + 1, columnBeingChecked, numberIdendticalTileStates + 1);
            }
        } else {
            console.log('no win condition achieved');
            return false;
        }
    }
}

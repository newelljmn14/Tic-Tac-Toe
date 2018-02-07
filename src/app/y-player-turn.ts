import { GameState } from './game-state';
import { TileState } from './tile-state.enum';
import { Players } from './players';
import { XPlayerTurn } from './x-player-turn';
import { EndGameState } from './end-game-state';

export class YPlayerTurn extends GameState {
    private nextPlayerState: XPlayerTurn;

    public playTurn(row: number, column: number): GameState {
        if (this.validateMove(row, column)) {
            this.board[row][column] = TileState.y;
            if (this.validateGameOver()) {
                console.log('game is over!!');
                return new EndGameState(this.board, null);
            }

            return new XPlayerTurn(this.board);
        } else {
            console.log('That is an invalid move; Please try again.');

            return new YPlayerTurn(this.board);
        }
    }

    constructor(board: TileState[][]) {
        super(board, Players.y);
    }
}

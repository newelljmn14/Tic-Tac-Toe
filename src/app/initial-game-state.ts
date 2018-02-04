import { YPlayerTurn } from './y-player-turn';
import { GameState } from './game-state';
import { TileState } from './tile-state.enum';
import { Players } from './players';

export class InitialGameState extends GameState {
    private nextPlayerState: YPlayerTurn;

    playTurn(row: number, column: number): GameState {
        this.board[row][column] = TileState.x;

        return new YPlayerTurn(this.board);
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

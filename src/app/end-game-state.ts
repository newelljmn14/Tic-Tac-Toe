import { GameState } from "./game-state";

export class EndGameState extends GameState {
    public playTurn(row: number, column: number): GameState {
        console.log("The game is over. Refresh the page to play again");

        return new EndGameState(this.board, null);
    }
}

import { Component, OnInit } from '@angular/core';
import { GameState } from "./game-state";
import { InitialGameState } from "./initial-game-state";
import { TileState } from "./tile-state.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    // ngOnInit(): void {
    //    this.displayBoard = this.convertBoardValuesToChars(this.currentGameState.board, this.initialDisplayBoard);
    // }

    // ngOnChanges(): void {
    //   this.displayBoard = this.convertBoardValuesToChars(this.currentGameState.board, this.displayBoard);
    // }

  private currentGameState: GameState = new InitialGameState();
  public initialDisplayBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  // public displayBoard: string[][];
  public displayBoard: TileState[][] = this.currentGameState.board;
  
  // private convertBoardValuesToChars(board: TileState[][], displayBoard: string[][]): string[][] {
  //   for (var rownumber = 0; rownumber < 3; rownumber++) {
  //     for (var colnumber = 0; colnumber < 3; colnumber++) {
  //       if (board[rownumber][colnumber] === TileState.none)
  //         displayBoard[rownumber][colnumber] = 'N';
  //       else if (board[rownumber][colnumber] === TileState.x)
  //         displayBoard[rownumber][colnumber] = 'X';
  //       else if (board[rownumber][colnumber] === TileState.y)
  //         displayBoard[rownumber][colnumber] = 'Y';
  //     }
  //   }
  //   return displayBoard;
  // }

  public playTurn(row: number, column: number): void {
    this.currentGameState = this.currentGameState.playTurn(row, column);
  }  
}

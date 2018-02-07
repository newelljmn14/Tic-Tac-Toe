import { Pipe, PipeTransform } from '@angular/core';
import { TileState } from './tile-state.enum';

@Pipe({
  name: 'tileStateConverter'
})
export class TileStateConverterPipe implements PipeTransform {

  transform(value: TileState, args?: any): string {
    if (value === TileState.none) {
      return ' ';
    } else if (value === TileState.x) {
      return 'X';
    } else {
      return 'Y';
    }
  }

}

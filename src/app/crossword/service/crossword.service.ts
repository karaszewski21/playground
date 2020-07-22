import { Injectable } from '@angular/core';
import { Crossword } from '../model/crossword';
import { CrosswordItem } from '../model/crosswordItem';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCrossword, getCrosswordItems } from '../store';

@Injectable({
  providedIn: 'root',
})
export class CrosswordService {
  crossword: Crossword;
  crosswordItems: CrosswordItem[];
  constructor(private store: Store) {
    this.store
      .select(getCrossword)
      .subscribe((crossword) => (this.crossword = crossword));

    this.store
      .select(getCrosswordItems)
      .subscribe(
        (getCrosswordItems) => (this.crosswordItems = getCrosswordItems)
      );
  }

  public firstGenerateCrossword(password: string): any {
    let crosswordItems: CrosswordItem[] = [];
    let crossword: Crossword = {
      password: password,
      positionPassword: 0,
      widthLeft: 0,
      widthRight: 0,
    };

    [...password].forEach((value, index) => {
      let crosswordItem: CrosswordItem = {
        positionCrossword: index,
        anwser: '',
        question: '',
        positionPassword: 0,
        searchLetter: value,
        hidden: true,
      };

      crosswordItems.push(crosswordItem);
    });

    return { crossword, crosswordItems };
  }

  public hiddenAnswer(enableMode: boolean): CrosswordItem[] {
    let crosswordItem: CrosswordItem;
    let crosswordItems: CrosswordItem[] = [];

    this.crosswordItems.forEach((element) => {
      crosswordItem = {
        positionCrossword: element.positionCrossword,
        anwser: element.anwser,
        question: element.question,
        searchLetter: element.searchLetter,
        positionPassword: element.positionPassword,
        hidden: enableMode,
      };
      crosswordItems.push(crosswordItem);
    });

    return crosswordItems;
  }

  public generateRowFromCrosswordItem(crosswordItem: CrosswordItem): string[] {
    let row: string[] = [];

    console.log(crosswordItem);
    if (!crosswordItem.hidden) {
      // if (crosswordItem.anwser.length === 0) {
      //   let wLeft = crosswordItem.anwser.slice(
      //     0,
      //     crosswordItem.positionPassword
      //   ).length;

      //   let spaceForPassword = crosswordItem.positionPassword;
      //   ++spaceForPassword;

      //   let wRight = crosswordItem.anwser.slice(
      //     spaceForPassword,
      //     crosswordItem.anwser.length
      //   ).length;

      //   for (let index = 0; index < wLeft; index++) {
      //     row.unshift('');
      //   }
      //   ``;

      //   row = [...row, ...crosswordItem.searchLetter];

      //   for (let index = 0; index < wRight; index++) {
      //     row.push('');
      //   }

      //   return row;
      // }
      // let wLeft = crosswordItem.anwser.slice(0, this.crossword.positionPassword)
      //   .length;

      let spaceForPassword = this.crossword.positionPassword;
      ++spaceForPassword;

      // let wRight = crosswordItem.anwser.slice(
      //   spaceForPassword,
      //   crosswordItem.anwser.length
      // ).length;

      for (let index = 0; index < this.crossword.widthLeft; index++) {
        row.unshift('');
      }

      row = [...row, ...crosswordItem.searchLetter];

      for (let index = 0; index < this.crossword.widthRight; index++) {
        row.push('');
      }

      return row;
    } else {
      if (crosswordItem.anwser.length === 0) {
        let wLeft = crosswordItem.anwser.slice(
          0,
          crosswordItem.positionPassword
        ).length;

        let spaceForPassword = crosswordItem.positionPassword;
        ++spaceForPassword;

        let wRight = crosswordItem.anwser.slice(
          spaceForPassword,
          crosswordItem.anwser.length
        ).length;

        for (let index = 0; index < wLeft; index++) {
          row.unshift('');
        }
        ``;

        row = [...row, ...crosswordItem.searchLetter];

        for (let index = 0; index < wRight; index++) {
          row.push('');
        }

        return row;
      } else {
        let wLeft = crosswordItem.anwser.slice(
          0,
          crosswordItem.positionPassword
        ).length;

        let spaceForPassword = crosswordItem.positionPassword;
        ++spaceForPassword;

        let wRight = crosswordItem.anwser.slice(
          spaceForPassword,
          crosswordItem.anwser.length
        ).length;

        let stepLeft = this.crossword.widthLeft - wLeft;
        let stepRight = this.crossword.widthRight - wRight;

        for (let index = 0; index < stepLeft; index++) {
          row.unshift('');
        }

        row = [...row, ...crosswordItem.anwser];

        for (let index = 0; index < stepRight; index++) {
          row.push('');
        }
        return row;
      }
    }
  }

  public updateCrossword(crosswordItem: CrosswordItem): Crossword {
    let crossword: Crossword = {
      password: this.crossword.password,
      positionPassword: this.crossword.positionPassword,
      widthLeft: this.crossword.widthLeft,
      widthRight: this.crossword.widthRight,
    };

    let wLeft = crosswordItem.anwser.slice(0, crosswordItem.positionPassword)
      .length;

    let spaceForPassword = crosswordItem.positionPassword;
    ++spaceForPassword;

    let wRight = crosswordItem.anwser.slice(
      spaceForPassword,
      crosswordItem.anwser.length
    ).length;

    if (wLeft > crossword.widthLeft) {
      crossword.widthLeft = wLeft;
    }

    if (crosswordItem.positionPassword > crossword.positionPassword) {
      crossword.positionPassword = crosswordItem.positionPassword;
    }

    if (wRight > crossword.widthRight) {
      crossword.widthRight = wRight;
    }

    return crossword;
  }

  public addCrossItemToList(
    position: number,
    hidden: boolean,
    crosswordItem: CrosswordItem
  ): CrosswordItem[] {
    let crosswordItems: CrosswordItem[] = [];

    this.crosswordItems.forEach((element) => {
      let crosswordItem: CrosswordItem = {
        positionCrossword: element.positionCrossword,
        anwser: element.anwser,
        question: element.question,
        searchLetter: element.searchLetter,
        positionPassword: element.positionPassword,
        hidden: element.hidden,
      };
      crosswordItems.push(crosswordItem);
    });

    let addedcCrosswordItem: CrosswordItem = {
      positionCrossword: crosswordItem.positionCrossword,
      anwser: crosswordItem.anwser,
      question: crosswordItem.question,
      positionPassword: crosswordItem.positionPassword,
      searchLetter: crosswordItem.searchLetter,
      hidden: hidden ?? crosswordItem.hidden,
    };

    crosswordItems[position] = addedcCrosswordItem;
    console.log(crosswordItems);
    return crosswordItems;
  }
}

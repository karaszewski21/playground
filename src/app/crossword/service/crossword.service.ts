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

  public generateFirstCrossword(password: string): any {
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
        show: true,
      };

      crosswordItems.push(crosswordItem);
    });

    return { crossword, crosswordItems };
  }

  public hiddenAnswerForCrossword(enableMode: boolean): CrosswordItem[] {
    let crosswordItem: CrosswordItem;
    let crosswordItems: CrosswordItem[] = [];

    this.crosswordItems.forEach((element) => {
      crosswordItem = {
        positionCrossword: element.positionCrossword,
        anwser: element.anwser,
        question: element.question,
        searchLetter: element.searchLetter,
        positionPassword: element.positionPassword,
        show: enableMode,
      };
      crosswordItems.push(crosswordItem);
    });

    return crosswordItems;
  }

  public generateRowFromCrosswordItem(crosswordItem: CrosswordItem): string[] {
    if (crosswordItem.show) {
      if (crosswordItem.anwser.length === 0) {
        return this.generateRowForCrosswordWithoutAnswer(crosswordItem);
      }
      return this.generateRowForCrosswordWithAnswer(crosswordItem);
    } else {
      return this.generateRowForCrosswordWithoutAnswer(crosswordItem);
    }
  }

  private generateRowForCrosswordWithoutAnswer(crosswordItem: CrosswordItem) {
    let row: string[] = [];

    for (let index = 0; index < this.crossword.widthLeft; index++) {
      row.unshift('');
    }

    row = [...row, ...crosswordItem.searchLetter];

    for (let index = 0; index < this.crossword.widthRight; index++) {
      row.push('');
    }

    return row;
  }

  private generateRowForCrosswordWithAnswer(
    crosswordItem: CrosswordItem
  ): string[] {
    let row: string[] = [];

    let widthLeftCrosswordItem =
      this.crossword.widthLeft - this.countLeftWidthAnswer(crosswordItem);
    let widthRightCrosswordItem =
      this.crossword.widthRight - this.countRightWidthAnswer(crosswordItem);

    for (let index = 0; index < widthLeftCrosswordItem; index++) {
      row.unshift('');
    }

    row = [...row, ...crosswordItem.anwser];

    for (let index = 0; index < widthRightCrosswordItem; index++) {
      row.push('');
    }
    return row;
  }

  private countLeftWidthAnswer(crosswordItem: CrosswordItem): number {
    return crosswordItem.anwser.slice(0, crosswordItem.positionPassword).length;
  }

  private countRightWidthAnswer(crosswordItem: CrosswordItem): number {
    let spaceOnPassword = crosswordItem.positionPassword;
    ++spaceOnPassword;

    return crosswordItem.anwser.slice(
      spaceOnPassword,
      crosswordItem.anwser.length
    ).length;
  }

  private countLeftWidthCrossword(
    crosswordItem: CrosswordItem,
    crossword: Crossword
  ): number {
    let widthLeftCrosswordItem = crosswordItem.anwser.slice(
      0,
      crosswordItem.positionPassword
    ).length;

    if (widthLeftCrosswordItem > crossword.widthLeft) {
      return widthLeftCrosswordItem;
    }

    return crossword.widthLeft;
  }

  private countRightWidthCrossword(
    crosswordItem: CrosswordItem,
    crossword: Crossword
  ): number {
    let spaceOnPassword = crosswordItem.positionPassword;
    ++spaceOnPassword;

    let widthRightCrosswordItem = crosswordItem.anwser.slice(
      spaceOnPassword,
      crosswordItem.anwser.length
    ).length;

    if (widthRightCrosswordItem > crossword.widthRight) {
      return widthRightCrosswordItem;
    }

    return crossword.widthRight;
  }

  public updateCrossword(crosswordItem: CrosswordItem): Crossword {
    let crossword: Crossword = {
      password: this.crossword.password,
      positionPassword: this.crossword.positionPassword,
      widthLeft: this.crossword.widthLeft,
      widthRight: this.crossword.widthRight,
    };

    crossword.widthLeft = this.countLeftWidthCrossword(
      crosswordItem,
      crossword
    );

    crossword.widthRight = this.countRightWidthCrossword(
      crosswordItem,
      crossword
    );

    if (crosswordItem.positionPassword > crossword.positionPassword) {
      crossword.positionPassword = crosswordItem.positionPassword;
    }

    return crossword;
  }

  public addCrossItemToList(
    position: number,
    show: boolean = true,
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
        show: element.show,
      };
      crosswordItems.push(crosswordItem);
    });

    let addedcCrosswordItem: CrosswordItem = {
      positionCrossword: crosswordItem.positionCrossword,
      anwser: crosswordItem.anwser,
      question: crosswordItem.question,
      positionPassword: crosswordItem.positionPassword,
      searchLetter: crosswordItem.searchLetter,
      show: show ?? crosswordItem.show,
    };

    crosswordItems[position] = addedcCrosswordItem;
    console.log(crosswordItems);
    return crosswordItems;
  }
}

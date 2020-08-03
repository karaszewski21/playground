import { Injectable } from '@angular/core';
import { Crossword } from '../model/crossword';
import { CrosswordItem, AnswerCrossword } from '../model/crosswordItem';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCrossword, getCrosswordItems } from '../store';

export interface Row {
  letter: string;
  colorCell: string;
}

@Injectable({
  providedIn: 'root',
})
export class CrosswordService {
  crossword: Crossword;
  crosswordItems: CrosswordItem[];
  answersCrossword: AnswerCrossword[];

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
  public getAnswerCrosswordList(answer: string): AnswerCrossword[] {
    this.answersCrossword = [];

    [...answer].forEach((letter, index) => {
      this.answersCrossword.push({
        positionSelectedLetter: index,
        answer: letter,
      });
    });

    return this.answersCrossword;
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
      let crosswordItem = {
        ...this.getCrosswrodItem(),
        positionCrossword: index,
        searchLetter: value,
        show: true,
      };

      crosswordItems.push(crosswordItem);
    });

    return { crossword, crosswordItems };
  }

  public hiddenAnswersForCrossword(show: boolean): CrosswordItem[] {
    let crosswordItem: CrosswordItem;
    let crosswordItems: CrosswordItem[] = [];

    this.crosswordItems.forEach((element) => {
      crosswordItem = {
        ...this.getCrosswrodItem(element),
        show: show,
      };
      crosswordItems.push(crosswordItem);
    });

    return crosswordItems;
  }

  public updateCrossword(crosswordItem: CrosswordItem): Crossword {
    let positionSelectedLetter =
      crosswordItem.answerCrossword.positionSelectedLetter;
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

    if (positionSelectedLetter > crossword.positionPassword) {
      crossword.positionPassword = positionSelectedLetter;
    }

    return crossword;
  }

  public updateCrossItemsList(
    position: number,
    show: boolean,
    crosswordItem: CrosswordItem
  ): CrosswordItem[] {
    let crosswordItems: CrosswordItem[] = [];

    this.crosswordItems.forEach((element) => {
      let crosswordItem: CrosswordItem = this.getCrosswrodItem(element);
      crosswordItems.push(crosswordItem);
    });

    let addedcCrosswordItem: CrosswordItem = this.getCrosswrodItem(
      crosswordItem
    );
    addedcCrosswordItem = { ...addedcCrosswordItem, show: show };

    crosswordItems[position] = addedcCrosswordItem;
    return crosswordItems;
  }

  public getCrosswrodItem(crosswordItem?: CrosswordItem): CrosswordItem {
    let newCrosswordItem: CrosswordItem;

    newCrosswordItem = {
      positionCrossword: crosswordItem?.positionCrossword ?? 0,
      answerCrossword: crosswordItem?.answerCrossword ?? {
        answer: '',
        positionSelectedLetter: 0,
      },
      question: crosswordItem?.question ?? '',
      searchLetter: crosswordItem?.searchLetter ?? '',
      show: crosswordItem?.show ?? true,
      widthLeft: crosswordItem?.widthLeft ?? 0,
      widthRight: crosswordItem?.widthRight ?? 0,
    };

    return newCrosswordItem;
  }

  public generateRowFromCrosswordItem(crosswordItem: CrosswordItem): Row[] {
    if (crosswordItem.show) {
      if (crosswordItem.answerCrossword.answer.length === 0) {
        return this.generateRowForCrosswordWithoutAnswer(crosswordItem);
      }
      return this.generateRowForCrosswordWithAnswer(crosswordItem);
    } else {
      return this.generateRowForCrosswordWithoutAnswer(crosswordItem);
    }
  }

  private generateRowForCrosswordWithoutAnswer(
    crosswordItem: CrosswordItem
  ): Row[] {
    let {
      positionSelectedLetter: positionPassword,
      answer: crosswordItemAnswerlength,
    } = crosswordItem.answerCrossword;

    let rows: Row[] = [];

    let widthLeftCrosswordItem =
      this.crossword.widthLeft - this.countLeftWidthAnswer(crosswordItem);
    let widthRightCrosswordItem =
      this.crossword.widthRight - this.countRightWidthAnswer(crosswordItem);

    for (let index = 0; index < widthLeftCrosswordItem; index++) {
      let row: Row = {
        letter: '',
        colorCell: 'weight',
      };
      rows.unshift(row);
    }

    for (let index = 0; index < positionPassword; index++) {
      let row: Row = {
        letter: 'X',
        colorCell: 'green',
      };
      rows.push(row);
    }

    let rowPassword: Row[] = [
      {
        letter: crosswordItem.searchLetter,
        colorCell: 'red',
      },
    ];
    rows = [...rows, ...rowPassword];

    ++positionPassword;
    for (
      positionPassword;
      positionPassword < crosswordItemAnswerlength.length;
      positionPassword++
    ) {
      let row: Row = {
        letter: 'X',
        colorCell: 'green',
      };
      rows.push(row);
    }

    for (let index = 0; index < widthRightCrosswordItem; index++) {
      let row: Row = {
        letter: '',
        colorCell: 'weight',
      };
      rows.push(row);
    }

    return rows;
  }

  private generateRowForCrosswordWithAnswer(
    crosswordItem: CrosswordItem
  ): Row[] {
    let positionPassword = crosswordItem.answerCrossword.positionSelectedLetter;
    let crosswordItemAnswerLenth = crosswordItem.answerCrossword.answer.length;
    let rows: Row[] = [];

    let widthLeftCrosswordItem =
      this.crossword.widthLeft - this.countLeftWidthAnswer(crosswordItem);
    let widthRightCrosswordItem =
      this.crossword.widthRight - this.countRightWidthAnswer(crosswordItem);

    for (let index = 0; index < widthLeftCrosswordItem; index++) {
      let row: Row = {
        letter: '',
        colorCell: 'weight',
      };
      rows.unshift(row);
    }

    for (let index = 0; index < positionPassword; index++) {
      let row: Row = {
        letter: crosswordItem.answerCrossword.answer[index],
        colorCell: 'green',
      };
      rows.push(row);
    }

    let rowPassword: Row[] = [
      {
        letter: crosswordItem.searchLetter,
        colorCell: 'red',
      },
    ];
    rows = [...rows, ...rowPassword];

    ++positionPassword;
    for (
      positionPassword;
      positionPassword < crosswordItemAnswerLenth;
      positionPassword++
    ) {
      let row: Row = {
        letter: crosswordItem.answerCrossword.answer[positionPassword],
        colorCell: 'green',
      };
      rows.push(row);
    }

    for (let index = 0; index < widthRightCrosswordItem; index++) {
      let row: Row = {
        letter: '',
        colorCell: 'weight',
      };
      rows.push(row);
    }

    return rows;
  }

  private countLeftWidthAnswer(crosswordItem: CrosswordItem): number {
    return crosswordItem.answerCrossword.answer.slice(
      0,
      crosswordItem.answerCrossword.positionSelectedLetter
    ).length;
  }

  private countRightWidthAnswer(crosswordItem: CrosswordItem): number {
    let spaceOnPassword = crosswordItem.answerCrossword.positionSelectedLetter;
    ++spaceOnPassword;

    return crosswordItem.answerCrossword.answer.slice(
      spaceOnPassword,
      crosswordItem.answerCrossword.answer.length
    ).length;
  }

  private countLeftWidthCrossword(
    { answerCrossword: { answer, positionSelectedLetter } }: CrosswordItem,
    { widthLeft }: Crossword
  ): number {
    let widthLeftCrosswordItem = answer.slice(0, positionSelectedLetter).length;

    if (widthLeftCrosswordItem > widthLeft) {
      return widthLeftCrosswordItem;
    }

    return widthLeft;
  }

  private countRightWidthCrossword(
    { answerCrossword: { answer, positionSelectedLetter } }: CrosswordItem,
    { widthRight }: Crossword
  ): number {
    let spaceOnPassword = positionSelectedLetter;
    ++spaceOnPassword;

    let widthRightCrosswordItem = answer.slice(spaceOnPassword, answer.length)
      .length;

    if (widthRightCrosswordItem > widthRight) {
      return widthRightCrosswordItem;
    }

    return widthRight;
  }
}

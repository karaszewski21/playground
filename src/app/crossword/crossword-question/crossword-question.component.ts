import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  Input,
  HostListener,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CrosswordItem } from '../model/crosswordItem';
import { CrosswordLetterQuestionComponent } from '../crossword-letter-question/crossword-letter-question.component';
import { AddCrosswordItem, UpdateCrossword } from '../store';

@Component({
  selector: 'app-crossword-question',
  templateUrl: './crossword-question.component.html',
  styleUrls: ['./crossword-question.component.scss'],
})
export class CrosswordQuestionComponent implements OnInit {
  answer: string[];
  selectedComponent: CrosswordLetterQuestionComponent;
  orginAnswerControl: FormControl;
  textAreaControl: FormControl;
  answerToAdded: FormControl;

  @Input() crosswordItem: CrosswordItem;
  @ViewChildren(CrosswordLetterQuestionComponent)
  allLetters: QueryList<CrosswordLetterQuestionComponent>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.answer = [...this.crosswordItem.anwser];
    this.orginAnswerControl = new FormControl(this.crosswordItem.anwser);
    this.orginAnswerControl.valueChanges.subscribe((anser) => {
      this.answer = [...anser];
      // this.crosswordItem.anwser = anser;
    });

    this.textAreaControl = new FormControl(this.crosswordItem.question);
    this.textAreaControl.valueChanges.subscribe((question) => {
      // this.crosswordItem.question = question;
    });

    this.answerToAdded = new FormControl(this.answerToAdded);
    this.answerToAdded.valueChanges.subscribe((question) => {
      // this.crosswordItem.question = question;
    });
  }

  checkLetter(event: any): void {
    let selectedLetter: string = event[0];
    this.selectedComponent = event[1];

    this.allLetters.forEach((element) => {
      element.resetColor();
    });

    if (selectedLetter === this.crosswordItem.searchLetter) {
      this.selectedComponent.selected = true;
      this.addAnswerToCrossword();
    } else {
      alert(`Litera ${selectedLetter} jest nieodpowiednia`);
    }
  }

  addAnswerToCrossword() {
    let crosswordItem: CrosswordItem;

    crosswordItem = {
      positionCrossword: this.crosswordItem.positionCrossword,
      anwser: this.orginAnswerControl.value,
      question: this.textAreaControl.value,
      hidden: this.crosswordItem.hidden,
      searchLetter: this.crosswordItem.searchLetter,
      positionPassword: this.selectedComponent.position,
    };

    let position = this.crosswordItem.positionCrossword;
    let hidden = null;
    this.store.dispatch(new UpdateCrossword({ crosswordItem }));
    this.store.dispatch(
      new AddCrosswordItem({ position, hidden, crosswordItem })
    );
  }

  checkAnsweForCrossword() {
    let crosswordItem: CrosswordItem;

    crosswordItem = {
      positionCrossword: this.crosswordItem.positionCrossword,
      anwser: this.orginAnswerControl.value,
      question: this.textAreaControl.value,
      hidden: true,
      searchLetter: this.crosswordItem.searchLetter,
      positionPassword: this.crosswordItem.positionPassword,
    };

    let position = this.crosswordItem.positionCrossword;
    let hidden = true;

    if (crosswordItem.anwser === this.answerToAdded.value) {
      this.store.dispatch(
        new AddCrosswordItem({ position, hidden, crosswordItem })
      );
    } else {
      alert(`${this.answerToAdded.value} jest nie poprawne`);
    }
  }
}

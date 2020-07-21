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

@Component({
  selector: 'app-crossword-question',
  templateUrl: './crossword-question.component.html',
  styleUrls: ['./crossword-question.component.scss'],
})
export class CrosswordQuestionComponent implements OnInit {
  answer: string[];
  formControl: FormControl = new FormControl();
  textArea: FormControl = new FormControl();

  @Input() crosswordItem: CrosswordItem;
  @ViewChildren(CrosswordLetterQuestionComponent)
  allLetters: QueryList<CrosswordLetterQuestionComponent>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((anser) => {
      this.answer = [...anser];
      this.crosswordItem.anwser = anser;
    });

    this.textArea.valueChanges.subscribe((question) => {
      this.crosswordItem.question = question;
    });
  }

  checkLetter(event: any): void {
    let selectedLetter: string = event[0];
    let selectedComponent: CrosswordLetterQuestionComponent = event[1];

    this.allLetters.forEach((element) => {
      element.resetColor();
    });

    if (selectedLetter === this.crosswordItem.searchLetter) {
      selectedComponent.selected = true;
    } else {
      alert(`Litera ${selectedLetter} jest nieodpowiednia`);
    }
  }
}

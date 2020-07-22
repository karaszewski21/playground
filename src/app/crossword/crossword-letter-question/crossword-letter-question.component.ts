import {
  Component,
  OnInit,
  Input,
  HostBinding,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-crossword-letter-question',
  templateUrl: './crossword-letter-question.component.html',
  styleUrls: ['./crossword-letter-question.component.scss'],
})
export class CrosswordLetterQuestionComponent implements OnInit {
  @Input() position: number;
  @Input() letter: string;
  @Output() checkLetter = new EventEmitter<any>();
  selected: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('click', ['this'])
  selectedLetter(component: CrosswordLetterQuestionComponent): void {
    this.checkLetter.emit([this.letter, component]);
  }

  resetColor() {
    this.selected = false;
  }
}

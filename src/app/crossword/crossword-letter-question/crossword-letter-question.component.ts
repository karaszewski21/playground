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
  @Output() selectedLetterEvent = new EventEmitter<any>();
  selected: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('click', ['this'])
  selectedLetter(component: CrosswordLetterQuestionComponent): void {
    this.selectedLetterEvent.emit([this.letter, component]);
  }

  setColor(): void {
    console.log('befor', this);
    //this.selected = true;
    console.log('after', this);
  }

  resetColor(): void {
    this.selected = false;
  }
}

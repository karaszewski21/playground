import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  Input,
  AfterViewInit,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CrosswordItem, AnswerCrossword } from '../model/crosswordItem';
import { AddCrosswordItem, UpdateCrossword } from '../store';
import { PluginComponent } from '../../shared/plugin/plugin.component';
import { SelectorCellComponent } from '../../shared/components/selector-cell/selector-cell.component';
import { CrosswordService } from '../service/crossword.service';

@Component({
  selector: 'app-crossword-question',
  templateUrl: './crossword-question.component.html',
  styleUrls: ['./crossword-question.component.scss'],
})
export class CrosswordQuestionComponent implements OnInit, AfterViewInit {
  answersCrossword: AnswerCrossword[];
  answer: string[];
  selectedSelectorCellComponent: SelectorCellComponent;
  orginAnswerControl: FormControl;
  questionControl: FormControl;
  checkedAnswerControl: FormControl;

  @Input() crosswordItem: CrosswordItem;
  @ViewChildren(PluginComponent) pluginComponents!: QueryList<PluginComponent>;

  constructor(
    private store: Store,
    private crosswordService: CrosswordService
  ) {}

  ngOnInit(): void {
    this.initAnswersCrossword();
    this.initFormControls();
  }

  ngAfterViewInit(): void {
    this.initColorSetCell();
  }

  private initColorSetCell(): void {
    this.pluginComponents
      .toArray()
      [
        this.crosswordItem.answerCrossword.positionSelectedLetter
      ]?.componentRef.instance.setColor('red');
  }

  private initAnswersCrossword() {
    let { answerCrossword } = this.crosswordItem;

    this.answersCrossword = this.crosswordService.getAnswerCrosswordList(
      answerCrossword.answer
    );
  }

  private initFormControls() {
    let { answerCrossword, question } = this.crosswordItem;

    this.orginAnswerControl = new FormControl(
      answerCrossword.answer,
      Validators.required
    );
    this.orginAnswerControl.valueChanges.subscribe((answer) => {
      this.answersCrossword = this.crosswordService.getAnswerCrosswordList(
        answer
      );
    });
    this.questionControl = new FormControl(question, Validators.required);
    this.checkedAnswerControl = new FormControl('', Validators.required);
  }

  selectLetter(event: any) {
    let { data } = (this.selectedSelectorCellComponent = <
      SelectorCellComponent
    >event);

    this.pluginComponents.forEach((element) => {
      (<SelectorCellComponent>element.componentRef.instance).resetColor();
    });

    if (!this.questionControl.valid) {
      alert(`Nie zadano pytania`);
      return;
    }

    if (data.answer === this.crosswordItem.searchLetter) {
      this.selectedSelectorCellComponent.setColor('red');
      this.addAnswerToCrossword();
    } else {
      alert(`Litera ${data.answer} jest nieodpowiednia`);
    }
  }
  addAnswerToCrossword() {
    let crosswordItem: CrosswordItem = this.getCompleteCrosswordItem();
    let { positionCrossword: position }: CrosswordItem = crosswordItem;
    let hidden = true;

    this.store.dispatch(new UpdateCrossword({ crosswordItem }));
    this.store.dispatch(
      new AddCrosswordItem({ position, hidden, crosswordItem })
    );
  }

  checkAnsweForCrossword() {
    if (!this.checkedAnswerControl.valid) {
      alert(`Odpowiedz jest wymagana`);
      return 0;
    }

    let crosswordItem: CrosswordItem = {
      ...this.getCompleteCrosswordItem(),
      show: true,
      answerCrossword: {
        answer: this.orginAnswerControl.value,
        positionSelectedLetter: this.crosswordItem.answerCrossword
          .positionSelectedLetter,
      },
    };
    let { positionCrossword: position, answerCrossword } = crosswordItem;
    let hidden = true;

    if (answerCrossword.answer === this.checkedAnswerControl.value) {
      this.store.dispatch(
        new AddCrosswordItem({ position, hidden, crosswordItem })
      );
    } else {
      alert(`${this.checkedAnswerControl.value} jest nie poprawne`);
    }
  }

  getCompleteCrosswordItem(): CrosswordItem {
    let crosswordItem: CrosswordItem = {
      ...this.crosswordService.getCrosswrodItem(this.crosswordItem),
      answerCrossword: {
        answer: this.orginAnswerControl.value,
        positionSelectedLetter: this.selectedSelectorCellComponent?.data
          .positionSelectedLetter,
      },
      question: this.questionControl.value,
    };

    return crosswordItem;
  }
}

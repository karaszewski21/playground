import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  OnChanges,
  SimpleChanges,
  Output,
  HostListener,
  EventEmitter,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { ICommonComponent } from '../../plugin/common.component';

@Component({
  selector: 'app-selector-cell',
  templateUrl: './selector-cell.component.html',
  styleUrls: ['./selector-cell.component.scss'],
})
export class SelectorCellComponent
  implements OnInit, AfterViewInit, ICommonComponent {
  colorCell: string = 'white';
  position: number = 0;

  @Output() event = new EventEmitter<any>();
  @Input() data: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.position = this.data.positionSelectedLetter;
  }

  @HostListener('click')
  selectLetter(): void {
    this.colorCell = 'red';
    this.event.emit(this);
  }

  resetColor(): void {
    this.colorCell = 'white';
  }

  setColor(color: string): void {
    this.colorCell = color;
    this.cdr.detectChanges();
  }

  getPosition(): number {
    return this.position;
  }
}

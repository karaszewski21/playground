import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  SelectorCellComponent = 'SelectorCellComponent';
  printPage(): void {
    window.print();
  }
}

import { EventEmitter } from '@angular/core';

export interface ICommonComponent {
  data: any;
  event: EventEmitter<any>;
}

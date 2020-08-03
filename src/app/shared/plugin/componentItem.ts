import { Type } from '@angular/core';

export class ComponentItem {
  constructor(
    public name: string,
    public component: Type<any>,
    public data: any
  ) {}
}

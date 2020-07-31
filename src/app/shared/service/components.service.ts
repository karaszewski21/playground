import { Injectable } from '@angular/core';
import { ComponentItem } from '../plugin/componentItem';
import { SelectorCellComponent } from '../components/selector-cell/selector-cell.component';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  components: ComponentItem[];
  constructor() {
    this.initComponents();
  }

  public setDataByNameComponent(nameComponent: string, dataComponent: any) {
    let component = this.components.find(({ name }) => name === nameComponent);
    let index = this.components.indexOf(component);
    component.data = dataComponent;

    this.components[index] = component;
  }

  public getComponentByName(name: string): ComponentItem {
    return this.components.find(({ name }) => name === name);
  }

  private initComponents() {
    this.components = [
      {
        name: 'SelectorCellComponent',
        component: SelectorCellComponent,
        data: { answer: 'k' },
      },
    ];
  }
}

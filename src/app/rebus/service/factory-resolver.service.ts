import { Injectable } from '@angular/core';
import { ComponentItem } from '../../shared/plugin/componentItem';
import { ImageModalComponent } from '../dynamicComponents/modals/image-modal/image-modal.component';
import { ReplaceTextModalComponent } from '../dynamicComponents/modals/replace-text-modal/replace-text-modal.component';
import { TextModalComponent } from '../dynamicComponents/modals/text-modal/text-modal.component';
import { XTextModalComponent } from '../dynamicComponents/modals/xtext-modal/xtext-modal.component';
import { ImageComponent } from '../dynamicComponents/rebusItems/image/image.component';
import { ReplaceTextComponent } from '../dynamicComponents/rebusItems/replace-text/replace-text.component';
import { TextComponent } from '../dynamicComponents/rebusItems/text/text.component';
import { XTextComponent } from '../dynamicComponents/rebusItems/xtext/xtext.component';
import { PlusComponent } from '../dynamicComponents/rebusItems/plus/plus.component';

@Injectable({
  providedIn: 'root',
})
export class FactoryResolverService {
  private componentItems: ComponentItem[] = [
    {
      component: ImageModalComponent,
      name: 'ImageModalComponent',
      data: null,
    },
    {
      component: TextModalComponent,
      name: 'TextModalComponent',
      data: null,
    },
    {
      component: XTextModalComponent,
      name: 'XTextModalComponent',
      data: null,
    },
    {
      component: ReplaceTextModalComponent,
      name: 'ReplaceTextModalComponent',
      data: null,
    },
    {
      component: ImageComponent,
      name: 'ImageComponent',
      data: null,
    },
    {
      component: TextComponent,
      name: 'TextComponent',
      data: null,
    },
    {
      component: XTextComponent,
      name: 'XTextComponent',
      data: null,
    },
    {
      component: ReplaceTextComponent,
      name: 'ReplaceTextComponent',
      data: null,
    },
    {
      component: PlusComponent,
      name: 'PlusComponent',
      data: null,
    },
  ];
  constructor() {}

  public getComponentByName(nameComponent: string): ComponentItem {
    return this.componentItems.find(
      (componentItem) => componentItem.name === nameComponent
    );
  }
}

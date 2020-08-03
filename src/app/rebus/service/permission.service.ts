import { Injectable } from '@angular/core';
import { IAccessRebusItem } from '../model/interface/IAccessRebusItem';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  accessRebusItems: IAccessRebusItem[] = [
    { name: 'Tekst', nameComponent: 'TextModalComponent' },
    { name: 'Zakresl tekst', nameComponent: 'XTextModalComponent' },
    { name: 'Dodaj obrazek', nameComponent: 'ImageModalComponent' },
    { name: 'Zamien tekst', nameComponent: 'ReplaceTextModalComponent' },
  ];
  constructor() {}

  getPermissionToAccessRebusItems(): IAccessRebusItem[] {
    return this.accessRebusItems;
  }
}

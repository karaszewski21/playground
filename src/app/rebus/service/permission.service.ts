import { Injectable } from '@angular/core';
import { IAccessRebusItem } from '../model/interface/IAccessRebusItem';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  accessRebusItems: IAccessRebusItem[] = [
    { name: 'Tekst', nameComponent: 'TextComponent' },
    { name: 'Zakresl tekst', nameComponent: 'XTextComponent' },
  ];
  constructor() {}

  getPermissionToAccessRebusItems(): IAccessRebusItem[] {
    return this.accessRebusItems;
  }
}

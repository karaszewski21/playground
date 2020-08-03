import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginDirective } from './plugin/plugin.directive';
import { PluginComponent } from './plugin/plugin.component';
import { SelectorCellComponent } from './components/selector-cell/selector-cell.component';

@NgModule({
  declarations: [PluginDirective, PluginComponent, SelectorCellComponent],
  imports: [CommonModule],
  entryComponents: [SelectorCellComponent],
  exports: [PluginComponent],
})
export class SharedModule {}

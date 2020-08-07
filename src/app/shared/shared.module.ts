import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginDirective } from './plugin/plugin.directive';
import { PluginComponent } from './plugin/plugin.component';
import { SelectorCellComponent } from './components/selector-cell/selector-cell.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PluginDirective, PluginComponent, SelectorCellComponent],
  imports: [CommonModule, ImageCropperModule, FormsModule, ReactiveFormsModule],
  entryComponents: [SelectorCellComponent],
  exports: [
    PluginComponent,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}

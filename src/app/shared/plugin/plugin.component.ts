import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ComponentRef,
} from '@angular/core';
import { PluginDirective } from './plugin.directive';
import { ICommonComponent } from './common.component';
import { ComponentsService } from '../service/components.service';
import { ComponentItem } from './componentItem';

@Component({
  selector: 'app-plugin',
  template: '<ng-template appPlugin></ng-template>',
})
export class PluginComponent implements OnInit {
  componentItem: ComponentItem;
  componentRef: ComponentRef<any>;

  @Input() nameComponent: string;
  @Input() data: any;
  @Output() event = new EventEmitter<any>();
  @ViewChild(PluginDirective, { static: true })
  pluginDirective: PluginDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentsService: ComponentsService
  ) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    this.componentItem = this.componentsService.getComponentByName(
      this.nameComponent
    );

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.componentItem.component
    );

    const viewContainerRef = this.pluginDirective.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<ICommonComponent>this.componentRef.instance).data = this.data;
    (<ICommonComponent>this.componentRef.instance).event.subscribe((value) => {
      this.event.emit(value);
    });
    this.componentRef.changeDetectorRef.detectChanges();
  }
}

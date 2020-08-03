import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FactoryDirective } from './factory.directive';
import { FactoryResolverService } from '../service/factory-resolver.service';
import { IRebusItem } from '../model/interface/IRebusItem';
import { IRebusItemComponent } from '../dynamicComponents/rebusItems/rebusItem/rebusitem-component';

@Component({
  selector: 'app-factory',
  template: '<ng-template appFactory></ng-template>',
})
export class FactoryComponent implements OnInit, OnChanges {
  @Input() rebusItem: IRebusItem;
  @Input() nameComponent: string = '';
  @ViewChild(FactoryDirective, { static: true })
  factoryDirective: FactoryDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private factoryResolverService: FactoryResolverService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadComponent();
  }

  ngOnInit(): void {
    //this.loadComponent();
  }

  loadComponent() {
    let componentItem = this.factoryResolverService.getComponentByName(
      this.nameComponent
    );

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentItem.component
    );

    const viewContainerRef = this.factoryDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    (<IRebusItemComponent>componentRef.instance).rebusItem = this.rebusItem;

    componentRef.changeDetectorRef.detectChanges();
  }
}

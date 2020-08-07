import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { FactoryDirective } from './factory.directive';
import { FactoryResolverService } from '../service/factory-resolver.service';
import { IRebusItem } from '../model/interface/IRebusItem';
import { IRebusItemComponent } from '../dynamicComponents/interface/rebusitem-component';

@Component({
  selector: 'app-factory',
  template: '<ng-template class="factory" appFactory></ng-template>',
  styleUrls: ['./factory.component.scss'],
})
export class FactoryComponent implements OnInit, OnChanges {
  @Input() rebusItem: IRebusItem;
  @Input() nameComponent: string = '';
  @Output() resetNameModalEvent: EventEmitter<string> = new EventEmitter();
  @ViewChild(FactoryDirective, { static: true })
  factoryDirective: FactoryDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private factoryResolverService: FactoryResolverService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.nameComponent !== '' && this.nameComponent !== undefined) {
      this.loadComponent();
    }
  }

  ngOnInit(): void {}

  loadComponent(): void {
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
    (<IRebusItemComponent>componentRef.instance).rebusEvent.subscribe(() => {
      componentRef.destroy(), this.resetNameModalEvent.emit();
    });

    componentRef.changeDetectorRef.detectChanges();
  }
}

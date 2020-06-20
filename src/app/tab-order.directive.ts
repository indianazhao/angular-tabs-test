import { Directive, OnChanges, Input } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tabOrder]'
})
export class TabOrderDirective implements OnChanges {

  @Input() tabOrder = 0;

  constructor(private tab: TabDirective) { }

  ngOnChanges() {
    (this.tab as any).__tabOrder = +this.tabOrder;
    this.tab.tabset.tabs.sort((a: any, b: any) => a.__tabOrder - b.__tabOrder);
  }
}

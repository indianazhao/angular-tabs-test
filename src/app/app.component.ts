import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  groups = [{
    activeTab: 0,
    tabs: [{
      checked: true,
      title: 'My Tab 1',
      content: 'Tab Contents 1',
    }, {
      checked: true,
      title: 'My Tab 2',
      content: 'Tab Contents 2',
    }, {
      checked: true,
      title: 'My Tab 3',
      content: 'Tab Contents 3',
    }]
  }, {
    activeTab: 0,
    tabs: [{
      checked: true,
      title: 'My Tab 1',
      content: 'Tab Contents 1',
    }, {
      checked: true,
      title: 'My Tab 2',
      content: 'Tab Contents 2',
    }]
  }];

  onSelect(event: TabDirective, group: any, iTab: number) {
    console.error(event);
    group.activeTab = iTab;
  }

  updateTabs(group: any, iTab: number) {
    group.tabs[iTab].checked = !group.tabs[iTab].checked;
    if (!group.tabs[iTab].checked && group.activeTab === iTab) {
      console.error('in...');
      // find out any existed tab
      group.activeTab = _.findIndex(group.tabs, { checked: true });
    } else if (group.tabs[iTab].checked) {
      if (group.activeTab < 0) {
        group.activeTab = iTab;
      }
    }
  }

}

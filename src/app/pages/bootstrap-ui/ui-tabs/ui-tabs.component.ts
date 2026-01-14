import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-ui-tabs',
  standalone: true,
  imports: [PageTitleComponent,TabsModule ],
  templateUrl: './ui-tabs.component.html',
  styleUrl: './ui-tabs.component.scss'
})
export class UiTabsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Tabs', active: true }];

      Prism.highlightAll();
    }
}

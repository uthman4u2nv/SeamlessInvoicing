import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { SimplebarAngularModule } from 'simplebar-angular';
@Component({
  selector: 'app-ui-lists',
  standalone: true,
  imports: [PageTitleComponent,SimplebarAngularModule],
  templateUrl: './ui-lists.component.html',
  styleUrl: './ui-lists.component.scss'
})
export class UiListsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Lists', active: true }];

      Prism.highlightAll();
    }
}

import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-ui-utilities',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-utilities.component.html',
  styleUrl: './ui-utilities.component.scss'
})
export class UiUtilitiesComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Utilities', active: true }];

      Prism.highlightAll();
    }
}

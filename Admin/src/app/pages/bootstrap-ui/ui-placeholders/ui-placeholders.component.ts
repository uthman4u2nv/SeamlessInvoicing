import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-ui-placeholders',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-placeholders.component.html',
  styleUrl: './ui-placeholders.component.scss'
})
export class UiPlaceholdersComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Placeholders', active: true }];

      Prism.highlightAll();
    }
}

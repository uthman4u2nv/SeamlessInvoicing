import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-ui-colors',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-colors.component.html',
  styleUrl: './ui-colors.component.scss'
})
export class UiColorsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Colors', active: true }];

      Prism.highlightAll();
    }
}

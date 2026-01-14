import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-ui-badges',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-badges.component.html',
  styleUrl: './ui-badges.component.scss'
})
export class UiBadgesComponent {
  
    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [
        { label: 'Base UI' },
        { label: 'Badges', active: true }
      ];

      Prism.highlightAll();
    }

}

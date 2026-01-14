import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-ui-cards',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-cards.component.html',
  styleUrl: './ui-cards.component.scss'
})
export class UiCardsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Cards', active: true }];
      Prism.highlightAll();
    }

}

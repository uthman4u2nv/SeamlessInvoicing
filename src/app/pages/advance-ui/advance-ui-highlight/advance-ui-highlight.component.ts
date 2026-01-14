import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-advance-ui-highlight',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './advance-ui-highlight.component.html',
  styleUrl: './advance-ui-highlight.component.scss'
})
export class AdvanceUiHighlightComponent {

  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'Highlight', active: true }];

    Prism.highlightAll();
  }

}

import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from "../../../shared/page-title/page-title.component";
@Component({
  selector: 'app-ui-media',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-media.component.html',
  styleUrl: './ui-media.component.scss'
})
export class UiMediaComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Media Object', active: true }];

      Prism.highlightAll();
    }
}

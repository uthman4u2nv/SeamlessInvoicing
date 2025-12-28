import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-ui-embed-video',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-embed-video.component.html',
  styleUrl: './ui-embed-video.component.scss'
})
export class UiEmbedVideoComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Embed Video', active: true }];

      Prism.highlightAll();
    }
}

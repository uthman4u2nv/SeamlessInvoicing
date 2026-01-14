import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-ui-images',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-images.component.html',
  styleUrl: './ui-images.component.scss'
})
export class UiImagesComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Images', active: true }];

      Prism.highlightAll();
    }
}

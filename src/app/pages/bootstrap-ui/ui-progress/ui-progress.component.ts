import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
@Component({
  selector: 'app-ui-progress',
  standalone: true,
  imports: [PageTitleComponent,ProgressbarModule],
  templateUrl: './ui-progress.component.html',
  styleUrl: './ui-progress.component.scss'
})
export class UiProgressComponent {


  type?: string;
  stacked: any[] = [];

  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {

    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Progress', active: true }];

    const types = ['success', 'info'];

    Prism.highlightAll();

    this.stacked = [
      {
        type: undefined,
        value: 15
      },
      {
        type: 'success',
        value: 30
      },
      {
        type: 'info',
        value: 20
      }
    ]
  }
}

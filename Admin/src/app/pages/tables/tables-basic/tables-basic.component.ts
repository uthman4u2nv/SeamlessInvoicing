import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-tables-basic',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './tables-basic.component.html',
  styleUrl: './tables-basic.component.scss'
})
export class TablesBasicComponent {
   // bread crum items
   breadCrumbItems!: Array<{}>;

   ngOnInit(): void {
     this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Basic Tables', active: true }];
     Prism.highlightAll();
   }

}

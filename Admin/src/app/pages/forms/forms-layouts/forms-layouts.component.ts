import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-forms-layouts',
  standalone: true,
  imports: [PageTitleComponent,BsDatepickerModule],
  templateUrl: './forms-layouts.component.html',
  styleUrl: './forms-layouts.component.scss'
})
export class FormsLayoutsComponent {


  colorTheme: any = 'theme-blue';

      // bread crum items
      breadCrumbItems!: Array<{}>;

      ngOnInit(): void {
        this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Layout', active: true }];

        Prism.highlightAll();
      }
}

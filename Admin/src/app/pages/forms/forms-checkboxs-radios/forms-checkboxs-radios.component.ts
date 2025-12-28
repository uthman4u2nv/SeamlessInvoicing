import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-forms-checkboxs-radios',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './forms-checkboxs-radios.component.html',
  styleUrl: './forms-checkboxs-radios.component.scss'
})
export class FormsCheckboxsRadiosComponent {

  type!: boolean
  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Checkboxs & Radios', active: true }];

    Prism.highlightAll();
  }
}

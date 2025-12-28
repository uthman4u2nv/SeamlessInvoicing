import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-ui-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule,PageTitleComponent],
  templateUrl: './ui-dropdowns.component.html',
  styleUrl: './ui-dropdowns.component.scss'
})
export class UiDropdownsComponent {

  
  // bread crum items
  breadCrumbItems!: Array<{}>;
  isDropup = true;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Dropdowns', active: true }];

    Prism.highlightAll();
  }
}

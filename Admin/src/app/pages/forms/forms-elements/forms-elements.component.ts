import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forms-elements',
  standalone: true,
  imports: [PageTitleComponent,NgbDropdownModule],
  templateUrl: './forms-elements.component.html',
  styleUrl: './forms-elements.component.scss'
})
export class FormsElementsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Basic Elements', active: true }];
    }
}

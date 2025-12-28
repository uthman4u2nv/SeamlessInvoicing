import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-advance-ui-scrollbar',
  standalone: true,
  imports: [SimplebarAngularModule,PageTitleComponent],
  templateUrl: './advance-ui-scrollbar.component.html',
  styleUrl: './advance-ui-scrollbar.component.scss'
})
export class AdvanceUiScrollbarComponent {
  
  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'Scrollbar', active: true }];
  }

}

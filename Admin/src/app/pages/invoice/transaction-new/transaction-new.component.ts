import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-transaction-new',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './transaction-new.component.html',
  styleUrl: './transaction-new.component.scss'
})
export class TransactionNewComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Transaction' }, { label: 'Add Transaction', active: true }];
  }
}

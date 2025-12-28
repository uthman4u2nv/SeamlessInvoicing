import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-payment-summary',
  standalone: true,
  imports: [PageTitleComponent,CommonModule,NgbDropdownModule,PaginationModule ],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.scss'
})
export class PaymentSummaryComponent {
  transactions = [
    {
      date: '20 Sep, 2022',
      lec: 'Lec-2152',
      name: 'Donald Risher',
      amount: '$240.00',
      paymentMethod: 'Google Pay',
      paymentClass: 'bg-success-subtle text-success',
    },
    {
      date: '12 Apr, 2022',
      lec: 'Lec-2153',
      name: 'Brody Holman',
      amount: '$390.00',
      paymentMethod: 'Cash',
      paymentClass: 'bg-warning-subtle text-warning',
    },
    {
      date: '28 Mar, 2022',
      lec: 'Lec-2154',
      name: 'Jolie Hood',
      amount: '$440.00',
      paymentMethod: 'Google Pay',
      paymentClass: 'bg-success-subtle text-success',
    },
    {
      date: '23 Aug, 2022',
      lec: 'Lec-2155',
      name: 'Buckminster Wong',
      amount: '$520.00',
      paymentMethod: 'Google Pay',
      paymentClass: 'bg-success-subtle text-success',
    },
    {
      date: '18 Sep, 2022',
      lec: 'Lec-2156',
      name: 'Howard Lyons',
      amount: '$480.00',
      paymentMethod: 'Cash',
      paymentClass: 'bg-warning-subtle text-warning',
    },
    {
      date: "12 Feb, 2022",
      lecId: "Lec-2157",
      name: "Howard Oneal",
      amount: "$550.00",
      paymentMethod: "Google Pay",
      paymentClass: 'bg-success-subtle text-success',
    },
    {
      date: "30 Nov, 2022",
      lecId: "Lec-2158",
      name: "Jena Hall",
      amount: "$170.00",
      paymentMethod: "Credit Card",
      paymentClass: 'bg-warning-subtle text-warning',
    },
    {
      date: "23 Sep, 2022",
      lecId: "Lec-2159",
      name: "Paki Edwards",
      amount: "$720.00",
      paymentMethod: "Credit Card",
      paymentClass: 'bg-warning-subtle text-warning',
    },
    {
      date: "16 Aug, 2022",
      lecId: "Lec-2160",
      name: "James Diaz",
      amount: "$820.00",
      paymentMethod: "Google Pay",
      paymentClass: 'bg-success-subtle text-success',
    },
  ];

  breadCrumbItems!: Array<{}>;


  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!:number;
  endItem!:number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Payment' }, { label: 'Payment', active: true }];

    this.tablepageChanged({ page: 1, itemsPerPage: this.itemsPerPage });
  }

  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.startItem = startItem;
    this.endItem = endItem;
    this.paginateData = this.transactions.slice(startItem, endItem);
  }
}

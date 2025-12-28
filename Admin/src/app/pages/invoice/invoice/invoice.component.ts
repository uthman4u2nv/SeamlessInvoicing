import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [NgbDropdownModule,CommonModule,PageTitleComponent,PaginationModule,FormsModule,CountUpModule,RouterModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  breadCrumbItems!: Array<{}>;
  tableData = [
    {
      id: 'Lec-2152',
      name: 'Donald Risher',
      email: 'morbi.quis@protonmail.org',
      date: '20 Sep, 2022',
      amount: '$240.00',
      status: { text: 'Paid', class: 'bg-success-subtle text-success' },
      imgSrc: 'assets/images/users/avatar-1.jpg',
    },
    {
      id: 'Lec-2153',
      name: 'Brody Holman',
      email: 'metus@protonmail.org',
      date: '12 Apr, 2022',
      amount: '$390.00',
      status: { text: 'Unpaid', class: 'bg-warning-subtle text-warning' },
      imgSrc: 'assets/images/users/avatar-2.jpg',
    },
    {
      id: 'Lec-2154',
      name: 'Jolie Hood',
      email: 'morbi.quis@protonmail.org',
      date: '28 Mar, 2022',
      amount: '$440.00',
      status: { text: 'Paid', class: 'bg-success-subtle text-success' },
      imgSrc: 'assets/images/users/avatar-3.jpg',
    },
    {
      id: 'Lec-2155',
      name: 'Buckminster Wong',
      email: 'morbi.quis@protonmail.org',
      date: '23 Aug, 2022',
      amount: '$520.00',
      status: { text: 'Paid', class: 'bg-success-subtle text-success' },
      imgSrc: 'assets/images/users/avatar-4.jpg',
    },
    {
      id: 'Lec-2156',
      name: 'Howard Lyons',
      email: 'neque.sed.dictum@icloud.org',
      date: '18 Sep, 2022',
      amount: '$480.00',
      status: { text: 'Refund', class: 'bg-info-subtle text-info' },
      imgSrc: 'assets/images/users/avatar-5.jpg',
    },
    {
      id: 'Lec-2157',
      imgSrc: 'assets/images/users/avatar-6.jpg',
      name: 'Howard Oneal',
      email: 'metus@protonmail.org',
      date: '12 Feb, 2022',
      amount: '$550.00',
      status: { text: 'Paid', class: 'bg-success-subtle text-success' },
    },
    {
      id: 'Lec-2158',
      imgSrc: 'assets/images/users/avatar-7.jpg',
      name: 'Jena Hall',
      email: 'morbi.quis@protonmail.org',
      date: '30 Nov, 2022',
      amount: '$170.00',
      status: { text: 'Cancel', class: 'bg-danger-subtle text-danger' },
    },
    {
      id: 'Lec-2159',
      imgSrc: 'assets/images/users/avatar-8.jpg',
      name: 'Paki Edwards',
      email: 'dictum.phasellus.in@hotmail.org',
      date: '23 Sep, 2022',
      amount: '$720.00',
      status: { text: 'Paid', class: 'bg-success-subtle text-success' },
    },
    {
      id: 'Lec-2160',
      imgSrc: 'assets/images/users/avatar-9.jpg',
      name: 'James Diaz',
      email: 'nascetur@yahoo.com',
      date: '16 Aug, 2022',
      amount: '$820.00',
      status: { text: 'Paid', class: 'bg-success-subtle text-success' },
    },
  ];

  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!:number;
  endItem!:number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Invoice' }, { label: 'Invoice', active: true }];

    this.tablepageChanged({ page: 1, itemsPerPage: this.itemsPerPage });
  }

  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.startItem = startItem;
    this.endItem = endItem;
    this.paginateData = this.tableData.slice(startItem, endItem);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [PageTitleComponent,PaginationModule,CommonModule,NgbDropdownModule,RouterModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {

  transactions = [
    { id: "#BR2150", date: "20 Sep, 2022", description: "Maintenance", type: "Credit", amount: "$1200.00", download: "N/A" },
    { id: "#BR2151", date: "12 Apr, 2022", description: "Flight Booking", type: "Credit", amount: "$3600.00", download: "N/A" },
    { id: "#BR2152", date: "28 Mar, 2022", description: "Office Rent", type: "Debit", amount: "$800.00", download: "N/A" },
    { id: "#BR2153", date: "23 Aug, 2022", description: "Salary Payment", type: "Credit", amount: "$1600.00", download: "download" },
    { id: "#BR2154", date: "18 Sep, 2022", description: "Salary Payment", type: "Debit", amount: "$3200.00", download: "N/A" },
    { id: "#BR2155", date: "12 Feb, 2022", description: "Maintenance", type: "Credit", amount: "$900.00", download: "download" },
    { id: "#BR2156", date: "30 Nov, 2022", description: "Online Product", type: "Credit", amount: "$200.00", download: "download" },
    { id: "#BR2157", date: "23 Sep, 2022", description: "Office Rent", type: "Debit", amount: "$1200.00", download: "N/A" },
    { id: "#BR2158", date: "16 Aug, 2022", description: "Online Product", type: "Credit", amount: "$1800.00", download: "N/A" },
  ];

  breadCrumbItems!: Array<{}>;


  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!:number;
  endItem!:number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Transaction' }, { label: 'Transaction List', active: true }];

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

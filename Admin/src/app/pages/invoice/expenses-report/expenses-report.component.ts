import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-expenses-report',
  standalone: true,
  imports: [PageTitleComponent, PaginationModule, CommonModule, NgbDropdownModule],
  templateUrl: './expenses-report.component.html',
  styleUrl: './expenses-report.component.scss'
})
export class ExpensesReportComponent {


  transactions = [
    {
      description: "Office Maintenance",
      vendor: "Heidenreich-Kautzer",
      date: "20 Sep, 2022",
      amount: "$240.00",
      status: { label: "Approved", class: "bg-success-subtle text-success" },
    },
    {
      description: "Bus Booking",
      vendor: "Dare-Stark",
      date: "12 Apr, 2022",
      amount: "$390.00",
      status: { label: "Approved", class: "bg-success-subtle text-success" },
    },
    {
      description: "Salary Payment",
      vendor: "Ortiz-Cronin",
      date: "28 Mar, 2022",
      amount: "$440.00",
      status: { label: "Pending", class: "bg-danger-subtle text-danger" },
    },
    {
      description: "Office Rent",
      vendor: "Jast, Hane and Bogan",
      date: "23 Aug, 2022",
      amount: "$520.00",
      status: { label: "Pending", class: "bg-danger-subtle text-danger" },
    },
    {
      description: "Computer Repairs",
      vendor: "Schroeder Group",
      date: "15 Dec, 2022",
      amount: "$480.00",
      status: { label: "Approved", class: "bg-success-subtle text-success" },
    },
    {
      description: "Software Update",
      vendor: "Carroll-Stroman",
      date: "18 Sep, 2022",
      amount: "$550.00",
      status: { label: "Approved", class: "bg-success-subtle text-success" },
    },
  ];

  breadCrumbItems!: Array<{}>;


  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!: number;
  endItem!: number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Report' }, { label: 'Expenses Report', active: true }];

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

import { Component } from '@angular/core';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sale-report',
  standalone: true,
  imports: [PageTitleComponent,PaginationModule,CommonModule,NgbDropdownModule],
  templateUrl: './sale-report.component.html',
  styleUrl: './sale-report.component.scss'
})
export class SaleReportComponent {

  transactions = [
    {
      lecId: "Lec-2152",
      date: "20 Sep, 2022",
      category: "Fashion",
      originalPrice: "$240.00",
      discount: "10%",
      finalPrice: "$190.00",
    },
    {
      lecId: "Lec-2153",
      date: "12 Apr, 2022",
      category: "Accessories",
      originalPrice: "$390.00",
      discount: "15%",
      finalPrice: "$280.00",
    },
    {
      lecId: "Lec-2154",
      date: "28 Mar, 2022",
      category: "Furniture",
      originalPrice: "$440.00",
      discount: "25%",
      finalPrice: "$350.00",
    },
    {
      lecId: "Lec-2155",
      date: "23 Aug, 2022",
      category: "Accessories",
      originalPrice: "$520.00",
      discount: "20%",
      finalPrice: "$460.00",
    },
    {
      lecId: "Lec-2156",
      date: "18 Sep, 2022",
      category: "Fashion",
      originalPrice: "$480.00",
      discount: "15%",
      finalPrice: "$390.00",
    },
    {
      lecId: "Lec-2157",
      date: "12 Feb, 2022",
      category: "Furniture",
      originalPrice: "$550.00",
      discount: "30%",
      finalPrice: "$360.00",
    },
    {
      lecId: "Lec-2158",
      date: "30 Nov, 2022",
      category: "Fashion",
      originalPrice: "$170.00",
      discount: "20%",
      finalPrice: "$90.00",
    },
    {
      lecId: "Lec-2159",
      date: "23 Sep, 2022",
      category: "Accessories",
      originalPrice: "$720.00",
      discount: "10%",
      finalPrice: "$620.00",
    },
    {
      lecId: "Lec-2160",
      date: "16 Aug, 2022",
      category: "Fashion",
      originalPrice: "$820.00",
      discount: "15%",
      finalPrice: "$630.00",
    },
    {
      lecId: "Lec-2161",
      date: "15 Dec, 2022",
      category: "Fashion",
      originalPrice: "$750.00",
      discount: "10%",
      finalPrice: "$690.00",
    },
  ];

  breadCrumbItems!: Array<{}>;


  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!:number;
  endItem!:number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Report' }, { label: 'Sale report', active: true }];

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

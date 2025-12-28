import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
export enum PaymentFilter {
  All,
  Paid,
  Pending
}
@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [PageTitleComponent, CommonModule, NgbDropdownModule, PaginationModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  allFilter = PaymentFilter;
  paymentFilter = PaymentFilter.All;
  transactions = [
    {
      name: "Donald Risher",
      date: "20 Sep, 2022",
      category: "Maintenance",
      paymentMethod: "Google Pay",
      amount: "$1200.00",
      status: { text: "Paid", class: "badge bg-success-subtle text-success p-2" },
    },
    {
      name: "Brody Holman",
      date: "12 Arl, 2022",
      category: "Flight Booking",
      paymentMethod: "Credit Card",
      amount: "$3600.00",
      status: { text: "Failed", class: "badge bg-danger-subtle text-danger p-2" },
    },
    {
      name: "Jolie Hood",
      date: "28 Mar, 2022",
      category: "Office Rent",
      paymentMethod: "Cash",
      amount: "$800.00",
      status: { text: "Pending", class: "badge bg-warning-subtle text-warning p-2" },
    },
    {
      name: "Buckminster Wong",
      date: "23 Aug, 2022",
      category: "Salary Payment",
      paymentMethod: "Google Pay",
      amount: "$1600.00",
      status: { text: "Paid", class: "badge bg-success-subtle text-success p-2" },
    },
    {
      name: "Howard Lyons",
      date: "18 Sep, 2022",
      category: "Maintenance",
      paymentMethod: "Bank Transfer",
      amount: "$3200.00",
      status: {
        text: "Failed",
        class: "badge bg-danger-subtle text-danger p-2"
      }
    },
    {
      name: "Howard Oneal",
      date: "12 Feb, 2022",
      category: "Online Product",
      paymentMethod: "Credit Card",
      amount: "$900.00",
      status: {
        text: "Paid",
        class: "badge bg-success-subtle text-success p-2"
      }
    },
    {
      name: "Jena Hall",
      date: "30 Nov, 2022",
      category: "Train Booking",
      paymentMethod: "Cash",
      amount: "$200.00",
      status: {
        text: "Paid",
        class: "badge bg-success-subtle text-success p-2"
      }
    },
    {
      name: "Paki Edwards",
      date: "23 Sep, 2022",
      category: "Maintenance",
      paymentMethod: "Google Pay",
      amount: "$1200.00",
      status: {
        text: "Pending",
        class: "badge bg-warning-subtle text-warning p-2"
      }
    },
    {
      name: "James Diaz",
      date: "16 Aug, 2022",
      category: "Bus Booking",
      paymentMethod: "Google Pay",
      amount: "$1800.00",
      status: {
        text: "Failed",
        class: "badge bg-danger-subtle text-danger p-2"
      }
    },
    {
      name: "Donald Risher",
      date: "20 Sep, 2022",
      category: "Maintenance",
      paymentMethod: "Google Pay",
      amount: "$1200.00",
      status: {
        text: "Paid",
        class: "badge bg-success-subtle text-success p-2"
      }
    },
    {
      name: "Buckminster Wong",
      date: "23 Aug, 2022",
      category: "Salary Payment",
      paymentMethod: "Google Pay",
      amount: "$1600.00",
      status: {
        text: "Paid",
        class: "badge bg-success-subtle text-success p-2"
      }
    },
    {
      name: "Howard Oneal",
      date: "12 Feb, 2022",
      category: "Online Product",
      paymentMethod: "Credit Card",
      amount: "$900.00",
      status: {
        text: "Paid",
        class: "badge bg-success-subtle text-success p-2"
      }
    },
    {
      name: "Jolie Hood",
      date: "28 Mar, 2022",
      category: "Online Product",
      paymentMethod: "Credit Card",
      amount: "$900.00",
      status: {
        text: "Pending",
        class: "badge bg-warning-subtle text-warning p-2"
      }
    },
    {
      name: "Paki Edwards",
      date: "23 Sep, 2022",
      category: "Maintenance",
      paymentMethod: "Cash",
      amount: "$2500.00",
      status: {
        text: "Pending",
        class: "badge bg-warning-subtle text-warning p-2"
      }
    }
  ];
  filterData: any[] = [];

  itemsPerPage = 5;
  startItem!: number;
  endItem!: number;

  breadCrumbItems!: Array<{}>;

  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Invoice' }, { label: 'Payments', active: true }];
    this.getFilterData()
  }

  assignToCurrantFilter(assignCurrantFilter: PaymentFilter) {
    this.paymentFilter = assignCurrantFilter;
    this.getFilterData()
  }

  getFilterData() {
    switch (this.paymentFilter) {
      case PaymentFilter.All:
        this.filterData = this.transactions;
        break;
      case PaymentFilter.Paid:
        this.filterData = this.transactions.filter(x => x.status.text === "Paid")
        break;
      case PaymentFilter.Pending:
        this.filterData = this.transactions.filter(x => x.status.text === "Pending")
        break;
    }
  }

  openModalCenter(content: any) {
    this.modalService.open(content, { centered: true });
  }

}

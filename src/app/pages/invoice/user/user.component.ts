import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule, NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [PageTitleComponent,PaginationModule,CommonModule,NgbDropdownModule,NgbTooltipModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(private modalService: NgbModal){}

  transactions = [
    {
      avatar: 'assets/images/users/avatar-1.jpg',
      name: 'Donald Risher',
      email: 'morbi.quis@protonmail.org',
      phone: '309-300-9739',
      date: '20 Sep, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      avatar: 'assets/images/users/avatar-2.jpg',
      name: 'Brody Holman',
      email: 'metus@protonmail.org',
      phone: '253-205-7394',
      date: '12 Arl, 2022',
      status: { label: 'Disabled', class: 'bg-danger-subtle text-danger' },
    },
    {
      avatar: 'assets/images/users/avatar-3.jpg',
      name: 'Jolie Hood',
      email: 'morbi.quis@protonmail.org',
      phone: '832-330-4300',
      date: '28 Mar, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      avatar: 'assets/images/users/avatar-4.jpg',
      name: 'Buckminster Wong',
      email: 'morbi.quis@protonmail.org',
      phone: '770-800-9825',
      date: '23 Aug, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      avatar: 'assets/images/users/avatar-5.jpg',
      name: 'Howard Lyons',
      email: 'neque.sed.dictum@icloud.org',
      phone: '804-509-5073',
      date: '18 Sep, 2022',
      status: { label: 'Disabled', class: 'bg-danger-subtle text-danger' },
    },
    {
      avatar: 'assets/images/users/avatar-6.jpg',
      name: 'Howard Oneal',
      email: 'metus@protonmail.org',
      phone: '205-243-9746',
      date: '12 Feb, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
  ];

  breadCrumbItems!: Array<{}>;


  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!:number;
  endItem!:number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'User' }, { label: 'User', active: true }];

    this.tablepageChanged({ page: 1, itemsPerPage: this.itemsPerPage });
  }

  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.startItem = startItem;
    this.endItem = endItem;
    this.paginateData = this.transactions.slice(startItem, endItem);
  }

  openModalCenter(content: any) {
    this.modalService.open(content, { centered: true });
  }

}

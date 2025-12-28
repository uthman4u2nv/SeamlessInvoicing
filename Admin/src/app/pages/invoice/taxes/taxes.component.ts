import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-taxes',
  standalone: true,
  imports: [PageTitleComponent, CommonModule,PaginationModule,NgbDropdownModule],
  templateUrl: './taxes.component.html',
  styleUrl: './taxes.component.scss'
})
export class TaxesComponent {
  taxes = [
    {
      name: 'Sales Tax',
      country: 'United States',
      applicable: '(any)',
      rate: '10%',
      status: 'Enabled',
      id: 'switch1'
    },
    {
      name: 'Value Added Tax(VAT)',
      country: 'Australia',
      applicable: '(any)',
      rate: '20%',
      status: 'Enabled',
      id: 'switch2'
    },
    {
      name: 'Goods & Service Tax(GST)',
      country: 'New Zealand',
      applicable: '(any)',
      rate: '15%',
      status: 'Enabled',
      id: 'switch3'
    },
    {
      name: 'Excise',
      country: 'Italy',
      applicable: '(any)',
      rate: '10%',
      status: 'Enabled',
      id: 'switch4'
    },
    {
      name: 'Value Added Tax(VAT)',
      country: 'Australia',
      applicable: '(any)',
      rate: '20%',
      status: 'Enabled',
      id: 'switch8'
    },
    {
      name: 'Value Added Tax(VAT)',
      country: 'Australia',
      applicable: '(any)',
      rate: '20%',
      status: 'Enabled',
      id: 'switch10'
    },
  ];

  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!: number;
  endItem!: number;

  breadCrumbItems!: Array<{}>;

  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Invoice' }, { label: 'Taxes', active: true }];

    this.tablepageChanged({ page: 1, itemsPerPage: this.itemsPerPage });
  }
  
  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.startItem = startItem;
    this.endItem = endItem;
    this.paginateData = this.taxes.slice(startItem, endItem);
  }

  openModalCenter(content: any) {
    console.log('sdsdsd');
    
    this.modalService.open(content, { centered: true });
  }
}

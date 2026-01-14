import { Component } from '@angular/core';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [PaginationModule,PageTitleComponent,CommonModule,NgbDropdownModule  ,RouterModule ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Crux Motorsports Helmet',
      category: 'Accessories',
      stock: '32 / 90',
      rating: 3.0,
      price: '$230.00',
      image: 'assets/images/products/img-5.png'
    },
    {
      id: 2,
      name: 'Half Sleeve T-Shirts (Blue)',
      category: 'Fashion',
      stock: '320 / 412',
      rating: 3.3,
      price: '$652.00',
      image: 'assets/images/products/img-6.png'
    },
    {
      id: 3,
      name: 'Noise Evolve Smartwatch',
      category: 'Fashion',
      stock: '142 / 230',
      rating: 4.5,
      price: '$332.00',
      image: 'assets/images/products/img-7.png'
    },
    {
      id: 4,
      name: 'Sweatshirt for Men (Pink)',
      category: 'Fashion',
      stock: '322 / 423',
      rating: 3.2,
      price: '$463.00',
      image: 'assets/images/products/img-8.png'
    },
    {
      id: 5,
      name: 'Crux Motorsports Helmet',
      category: 'Accessories',
      stock: '32 / 90',
      rating: 3.0,
      price: '$230.00',
      image: 'assets/images/products/img-5.png'
    },
    {
      id: 6,
      name: 'Noise Evolve Smartwatch',
      category: 'Fashion',
      stock: '142 / 230',
      rating: 4.5,
      price: '$332.00',
      image: 'assets/images/products/img-7.png'
    },
  ];
  breadCrumbItems!: Array<{}>;
  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!: number;
  endItem!: number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Invoice' }, { label: 'Product list', active: true }];

    this.tablepageChanged({ page: 1, itemsPerPage: this.itemsPerPage });
  }

  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.startItem = startItem;
    this.endItem = endItem;
    this.paginateData = this.products.slice(startItem, endItem);
  }
}

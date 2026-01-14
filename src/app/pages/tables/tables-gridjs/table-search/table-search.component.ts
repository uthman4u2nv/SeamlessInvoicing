import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Observable } from 'rxjs';
import { GridJsModel } from '../gridjs.model';
import { NgbdGridJsSortableHeader } from '../gridjs-sortable.directive';
import { GridJsService } from '../gridjs.service';

@Component({
  selector: 'app-table-search',
  standalone: true,
  imports: [PaginationModule,FormsModule,CommonModule],
  templateUrl: './table-search.component.html',
  styleUrl: './table-search.component.scss',
  providers: [GridJsService, DecimalPipe]
})
export class TableSearchComponent {
  gridjsListSearch$!: Observable<GridJsModel[]>;
  totalSearch$: Observable<number>;
  @ViewChildren(NgbdGridJsSortableHeader) headers!: QueryList<NgbdGridJsSortableHeader>;
  
  constructor(public serviceTest: GridJsService) {
    this.gridjsListSearch$ = serviceTest.countries$;
    this.totalSearch$ = serviceTest.total$;
  }

  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  onSort({ column, direction }: any) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.serviceTest.sortColumn = column;
    this.serviceTest.sortDirection = direction;
  }
}

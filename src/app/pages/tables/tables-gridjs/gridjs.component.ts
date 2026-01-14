import { Component, QueryList, ViewChildren } from '@angular/core';

// Data Get
import { gridlist } from './data';

import {GridJsModel} from './gridjs.model';
import { GridJsService } from './gridjs.service';
import { NgbdGridJsSortableHeader, SortEvent } from './gridjs-sortable.directive';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule, UntypedFormBuilder } from '@angular/forms';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgPipesModule } from 'ngx-pipes';
import { CardTableComponent } from './card-table/card-table.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { TableSortingComponent } from './table-shorting/table-sorting.component';
import { TableLoadingComponent } from './table-loading/table-loading.component';

@Component({
  selector: 'app-gridjs',
  templateUrl: './gridjs.component.html',
  styleUrls: ['./gridjs.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule,PageTitleComponent,PaginationModule,NgPipesModule,NgbdGridJsSortableHeader,CardTableComponent,TableSearchComponent,TableSortingComponent,TableLoadingComponent],
  providers: [GridJsService, DecimalPipe]
})
export class GridjsComponent {
 // bread crumb items
 breadCrumbItems!: Array<{}>;

 // Table data
 gridjsList$!: Observable<GridJsModel[]>;
 total$: Observable<number>;
 loading$: Observable<boolean>;
 @ViewChildren(NgbdGridJsSortableHeader) headers!: QueryList<NgbdGridJsSortableHeader>;

 constructor(public service: GridJsService, private formBuilder: UntypedFormBuilder) {
  this.gridjsList$ = service.countries$;
  this.total$ = service.total$;
  this.loading$ = service.loading$;
 }
  
  ngOnInit(): void {
   /**
    * BreadCrumb
    */
   this.breadCrumbItems = [
    { label: 'Tables' },
    { label: 'Grid Js', active: true }
  ];
  }

  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  onSort({column, direction}: SortEvent) {
    console.log({column, direction});
    
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}

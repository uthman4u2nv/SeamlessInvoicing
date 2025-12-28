import { Component } from '@angular/core';
import { icons } from './data';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-icons-bootstrap',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './icons-bootstrap.component.html',
  styleUrl: './icons-bootstrap.component.scss'
})
export class IconsBootstrapComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  icons!: any;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Bootstrap', active: true }
    ];

    this.icons = icons

    var keys = Object.keys(icons);
    this.loadIconList(keys);

  }

  loadIconList(datas: any) {
    var icons = '';
    var arr = Array.from(datas);
    for (let index = 0; index < arr.length; index++) {
      icons += '<div class="col-xl-3 col-lg-4 col-sm-6">\
        <i class="bi bi-'+ arr[index] + '"></i> ' + arr[index] + '\
        </div>'
    }
    const element: HTMLElement = document.getElementById('iconList1') as HTMLElement
    element.innerHTML = icons
  };
}
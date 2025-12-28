import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-icons-boxicons',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './icons-boxicons.component.html',
  styleUrl: './icons-boxicons.component.scss'
})
export class IconsBoxiconsComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Boxicons', active: true }
    ];
  }
}

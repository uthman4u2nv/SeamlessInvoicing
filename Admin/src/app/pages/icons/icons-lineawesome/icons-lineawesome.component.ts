import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-icons-lineawesome',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './icons-lineawesome.component.html',
  styleUrl: './icons-lineawesome.component.scss'
})
export class IconsLineawesomeComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Lineawesome', active: true }
    ];
  }

}

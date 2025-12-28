import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-ui-carousel',
  standalone: true,
  imports: [CarouselModule,PageTitleComponent],
  templateUrl: './ui-carousel.component.html',
  styleUrl: './ui-carousel.component.scss'
})
export class UiCarouselComponent {

  
    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Carousel', active: true }];
      Prism.highlightAll();
    }

}

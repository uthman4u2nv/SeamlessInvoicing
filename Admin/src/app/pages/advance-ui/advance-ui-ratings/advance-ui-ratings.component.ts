import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';

@Component({
  selector: 'app-advance-ui-ratings',
  standalone: true,
  imports: [PageTitleComponent,FormsModule,RatingModule],
  templateUrl: './advance-ui-ratings.component.html',
  styleUrl: './advance-ui-ratings.component.scss'
})
export class AdvanceUiRatingsComponent {


  // bread crum items
  breadCrumbItems!: Array<{}>;

  max = 10;
  rate = 3;
  readrate = 4.5;
  isReadonly = true;
  x = 5;
  y = 2;

  hovermax = 5;
  hoverrate = 1;
  resetrate = 2;

  overStar: number | undefined = this.hoverrate;
  percent = 0;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'Ratings', active: true }];
    Prism.highlightAll();
  }



  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.resetrate = 0;
  }

}

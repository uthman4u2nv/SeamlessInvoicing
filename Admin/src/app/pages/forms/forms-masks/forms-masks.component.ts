import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-forms-masks',
  standalone: true,
  imports: [PageTitleComponent, NgxMaskDirective,NgxMaskPipe],
  templateUrl: './forms-masks.component.html',
  styleUrl: './forms-masks.component.scss'
})
export class FormsMasksComponent {

  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Input Masks', active: true }];
  }
}

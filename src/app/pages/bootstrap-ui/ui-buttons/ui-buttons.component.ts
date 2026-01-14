import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-ui-buttons',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './ui-buttons.component.html',
  styleUrl: './ui-buttons.component.scss'
})
export class UiButtonsComponent {

  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Buttons', active: true }];

    Prism.highlightAll();
  }
  // Follow Unfollow custom Toggle
  togglebtn(event: any) {
    var followbtn = event.target.closest('.custom-toggle') as any;
    if (followbtn.classList.contains("active")) {
      followbtn.classList.remove('active')
    } else {
      followbtn.classList.add('active')
    }
  }
}

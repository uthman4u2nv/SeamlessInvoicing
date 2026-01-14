import { Component } from '@angular/core';
import { ScrollspyDirective } from '../../../core/diractive/scrollspy.directive';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advance-ui-scrollspy',
  standalone: true,
  imports: [ScrollspyDirective, PageTitleComponent, CommonModule],
  templateUrl: './advance-ui-scrollspy.component.html',
  styleUrl: './advance-ui-scrollspy.component.scss'
})
export class AdvanceUiScrollspyComponent {

  currentSection = 'fat';

  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'ScrollSpy', active: true }];
  }


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor() { }
}

import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';

@Component({
  selector: 'app-forms-wizard',
  standalone: true,
  imports: [PageTitleComponent,CdkStepperModule,NgStepperModule],
  templateUrl: './forms-wizard.component.html',
  styleUrl: './forms-wizard.component.scss'
})
export class FormsWizardComponent {
    // bread crumb items
    breadCrumbItems!: Array<{}>;
  
    constructor() { }
  
    ngOnInit(): void {
      /**
      * BreadCrumb
      */
       this.breadCrumbItems = [
        { label: 'Forms' },
        { label: 'Wizard', active: true }
      ];
    }
}

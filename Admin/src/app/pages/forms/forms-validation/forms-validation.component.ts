import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-validation',
  standalone: true,
  imports: [PageTitleComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './forms-validation.component.html',
  styleUrl: './forms-validation.component.scss'
})
export class FormsValidationComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  
  //  Validation form
  validationform!: UntypedFormGroup;
  tooltipvalidationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  
  constructor(private formBuilder: UntypedFormBuilder) { }
  
  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Forms Validation', active: true }
     ];
    
     Prism.highlightAll();
  
    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      agree: ['', [Validators.required]],
    });
  
    /**
     * Bootstrap tooltip validation form data
     */
     this.tooltipvalidationform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });
  
  }
  
  /**
  * Bootsrap validation form submit method
  */
   validSubmit() {
    this.submit = true;
  }
  
  /**
   * Returns form
   */
   get form() {
    return this.validationform.controls;
  }
  
  /**
   * Bootstrap tooltip form validation submit method
   */
   formSubmit() {
    this.formsubmit = true;
  }
  
  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.tooltipvalidationform.controls;
  }
  }
  
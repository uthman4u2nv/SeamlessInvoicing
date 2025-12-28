import { Component } from '@angular/core';
import { Validators, Editor, Toolbar, TOOLBAR_FULL } from 'ngx-editor';
import { NgxEditorModule } from 'ngx-editor';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
@Component({
  selector: 'app-forms-editors',
  standalone: true,
  imports: [NgxEditorModule,PageTitleComponent],
  templateUrl: './forms-editors.component.html',
  styleUrl: './forms-editors.component.scss'
})
export class FormsEditorsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  editor: any = Editor;
  toolbar: any = TOOLBAR_FULL; 
  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Editors', active: true }
    ];

    this.editor = new Editor();
    // this.toolbar= Toolbar =[
    //   ['bold', 'italic'],
    //   ['underline', 'strike'],
    //   ['code', 'blockquote'],
    //   ['ordered_list', 'bullet_list'],
    //   [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    //   ['link', 'image'],
    //   ['text_color', 'background_color'],
    //   ['align_left', 'align_center', 'align_right', 'align_justify'],
    // ];
  
  }
}

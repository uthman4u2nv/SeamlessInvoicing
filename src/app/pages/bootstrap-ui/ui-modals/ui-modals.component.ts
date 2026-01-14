import { Component, TemplateRef } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Prism from 'prismjs';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ui-modals',
  standalone: true,
  imports: [PageTitleComponent, BsDropdownModule,PopoverModule,FormsModule],
  templateUrl: './ui-modals.component.html',
  styleUrl: './ui-modals.component.scss'
})
export class UiModalsComponent {

  constructor(private modalService: NgbModal) { }

  // bread crum items
  breadCrumbItems!: Array<{}>;
  name!:string

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Modals', active: true }];

    Prism.highlightAll();
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  staticBackdrop(content: any) {
    this.modalService.open(content, { centered: true,backdrop: 'static' });
  }

  openModalCenter(content: any) {
    this.modalService.open(content, { centered: true });
  }
  
  varyingModal(content: any,name:string) {
    this.name = '';
    this.name = name;
    this.modalService.open(content, { centered: true });
  }

  openScrollableModal(content: any) {
    this.modalService.open(content, { centered: true,scrollable:true });
  }

  openSizeModel(content: TemplateRef<any>,size:string ) {
		this.modalService.open(content, { size: size });
	}

  openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}

  openModalDialogCustomClass(content: TemplateRef<any>, customClass: string) {
    this.modalService.open(content, { modalDialogClass: customClass });
  }
}

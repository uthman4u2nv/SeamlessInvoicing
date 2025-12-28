import { Component, inject, TemplateRef } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ui-offcanvas',
  standalone: true,
  imports: [SimplebarAngularModule, PageTitleComponent],
  templateUrl: './ui-offcanvas.component.html',
  styleUrl: './ui-offcanvas.component.scss'
})
export class UiOffcanvasComponent {

  // bread crum items
  breadCrumbItems!: Array<{}>;
  private offcanvasService = inject(NgbOffcanvas);

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Offcanvas', active: true }];
  }

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content)
  }

  openOffPostionwise(content: TemplateRef<any>, placeToOpen: 'start' | 'end' | 'top' | 'bottom') {
    this.offcanvasService.open(content, { position: placeToOpen })
  }

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

	openTop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'top' });
	}

	openBottom(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	}

	openNoBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: false });
	}

	openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static' });
	}

	openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
	}

	openNoKeyboard(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { keyboard: false });
	}

	openNoAnimation(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { animation: false });
	}

	openCustomBackdropClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdropClass: 'bg-info' });
	}

	openCustomPanelClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'bg-info' });
	}




}

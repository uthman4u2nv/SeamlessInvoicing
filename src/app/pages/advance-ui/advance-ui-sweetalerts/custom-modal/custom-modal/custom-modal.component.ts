import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-modal',
  standalone: true,
  imports: [],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss'
})
export class CustomModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
  ) {}

  closeModal(result: number | null = null) {
    this.activeModal.close(result);
  }

}

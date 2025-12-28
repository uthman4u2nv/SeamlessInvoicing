import { Component, inject, TemplateRef } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from './custom-modal/custom-modal/custom-modal.component';
import { SweetAlertService } from '../../../core/services/sweetalert.service';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-advance-ui-sweetalerts',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './advance-ui-sweetalerts.component.html',
  styleUrl: './advance-ui-sweetalerts.component.scss',
})
export class AdvanceUiSweetalertsComponent {

  // bread crum items
  breadCrumbItems!: Array<{}>;

  constructor(private modalService: NgbModal, private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'Sweet Alerts', active: true }];
  }


  basicMessage() {
    this.sweetAlertService.custom('Any fool can use a computer')
  }

  openModal() {
    const modalRef = this.modalService.open(CustomModalComponent, { centered: true });
  }


  titleText() {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      iconColor: '#1ea6d3',
      confirmButtonColor: '#4b93ff',
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
    });
  }


  successmsg() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
      cancelButtonColor: '#ef476f',
      confirmButtonText: 'OK',

    });
  }

  modelTitle() {
    Swal.fire({
      title: 'Oops...',
      text: 'Something went wrong!',
      icon: 'error',
      footer: '<a href="">Why do I have this issue?</a>',
      confirmButtonColor: '#4b93ff',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
    }).then(result => {
      if (result.value) {
        Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', confirmButtonColor: 'rgb(3, 142, 220)', icon: 'success', });
      }
    });
  }


  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
    }).then(result => {
      if (result.value) {
        Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', confirmButtonColor: 'rgb(3, 142, 220)', icon: 'success', });
      }
    });
  }
  imageHeader() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'assets/images/logo-sm.png',
      imageHeight: 50,
      confirmButtonColor: 'rgb(3, 142, 220)',
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
    });
  }
  timer() {
    let timerInterval: any;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
      didOpen: () => {
        // Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b: any = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }

  custom() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="mdi mdi-thumb-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: ' <i class= "mdi mdi-thumb-down"></i>',
      confirmButtonColor: '#06d6a0',
      cancelButtonColor: '#ef476f',
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
    });
  }

  customImg() {
    Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      confirmButtonText: 'OK',
      confirmButtonColor: '#4b93ff',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
    });
  }


  threeBtn() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success w-xs me-2',
        cancelButton: 'btn btn-danger w-xs',
        denyButton: 'btn btn-info w-xs me-2',
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Do you want to save the changes?',
        confirmButtonText: 'Save',
        denyButtonText: 'Don\'t save',
        cancelButtonText: 'Cancel',
        showCancelButton: true,

      })
      .then(result => {
        if (result.value) {
          Swal.fire({
            title: 'Saved!',
            confirmButtonColor: 'btn btn-primary',
            icon: 'success',
          }
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: 'Cancelled',
            confirmButtonColor: 'rgb(3, 142, 220)',
            icon: 'error',
          }
          );

        }
      });
  }
  position() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
      timer: 1500,
    });
  }

  customBackground() {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      confirmButtonColor: '#556ee6',
      background: '#ffff',
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
    });
  }

  ajax() {
    Swal.fire({
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      confirmButtonColor: 'btn btn-primary',
      cancelButtonColor: 'btn btn-danger',
      customClass: {
        confirmButton: 'btn btn-primary w-xs mt-2'
      },
      preConfirm: (email) => {
        // eslint-disable-next-line no-unused-vars
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            if (email === 'taken@example.com') {
              Promise.reject(new Error('This email is already taken.'));
            } else {
              resolve();
            }
          }, 2000);
        });
      },

      allowOutsideClick: false,
    }).then((email) => {
      Swal.fire({
        icon: 'success',
        title: 'Ajax request finished!',
        confirmButtonColor: '#4b93ff',
        html: 'Submitted email: ' + email,
      });
    });
  }

  // successModel(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  // }

  // ErrorMsg(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  // }

  // WaningMsg(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  // }

  // JoinMsg(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  // }

  // EmailMsg(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  // }

  // notificationMsg(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  // }

}

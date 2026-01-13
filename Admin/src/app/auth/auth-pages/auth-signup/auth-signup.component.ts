import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { RegistrationService } from '../../../services/registration.service';
import { LoadingService } from '../../../services/loading.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { CustomModalComponent } from './custom-modal/custom-modal/custom-modal.component';
import { SweetAlertService } from '../../../core/services/sweetalert.service';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [
    RouterModule,
    NgbCarouselModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './auth-signup.component.html',
  styleUrl: './auth-signup.component.scss',
})
export class AuthSignupComponent {
  start: Boolean = true;
  confirm: Boolean = false;
  finish: Boolean = false;
  startForm: any;
  verifyOTPForm: any;
  submitForm: any;
  showerror: Boolean = false;
  confMessage = '';
  submitting = false;
  submit = false;
  sub = false;

  constructor(
    private loading: LoadingService,
    private fb: FormBuilder,
    private rs: RegistrationService
  ) {}
  ngOnInit() {
    this.startForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
          ),
        ],
      ],
      confPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
          ),
        ],
      ],
    });
    this.verifyOTPForm = this.fb.group({
      //email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.submitForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      organizationName: ['', [Validators.required]],
    });
  }
  CheckPassword() {
    const password = this.startForm.value.password;
    const confPassword = this.startForm.value.confPassword;
    if (password != confPassword) {
      this.showerror = true;
      this.confMessage = 'Password and Confirm Password not the same';
      this.startForm.patchValue({
        confPassword: '',
      });
      return;
    }
  }
  verifyOTP() {
    if (this.verifyOTPForm.invalid) {
      this.verifyOTPForm.markAllAsTouched();
      return;
    }
    this.submit = true;
    this.loading.show();
    let data = {
      destination: this.startForm.value.email,
      otpType: 2,
      otp: this.verifyOTPForm.value.otp,
    };
    this.rs.VerifyOTP(data).subscribe((d) => {
      if (d.isSuccess) {
        this.submitForm.patchValue({
          email: this.startForm.value.email,
        });
        this.start = false;
        this.confirm = false;
        this.finish = true;
      } else {
        this.start = false;
        this.confirm = true;
        this.finish = false;
      }
      this.loading.hide();
    });
  }
  verifyEmail() {
    if (this.startForm.invalid) {
      this.startForm.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.loading.show();
    const password = this.startForm.value.password;
    const confPassword = this.startForm.value.confPassword;
    if (password != confPassword) {
      alert('Password and Confirm Password not the same');
      return;
    }
    let data = {
      destination: this.startForm.value.email || '',
      otpType: 2,
    };
    this.rs.SendOTP(data).subscribe((d) => {
      if (d.isSuccess) {
        this.start = false;
        this.confirm = true;
        this.finish = false;
      } else {
        alert(d.message);
        this.start = true;
        this.confirm = false;
        this.finish = false;
      }
      this.loading.hide();
    });
  }

  SubmitReg() {
    if (this.submitForm.invalid) {
      this.submitForm.markAllAsTouched();
      return;
    }
    this.sub = true;
    this.loading.show();
    let data = {
      email: this.startForm.value.email,
      password: this.startForm.value.password,
      firstName: this.submitForm.value.firstName,
      lastName: this.submitForm.value.lastName,
      phoneNumber: this.submitForm.value.phoneNumber,
      organizationName: this.submitForm.value.organizationName,
    };
    this.rs.SubmitReg(data).subscribe((d) => {
      if (d.isSuccess) {
        Swal.fire({
          title: 'Good job!',
          text: d.message,
          icon: 'success',
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn btn-primary w-xs mt-2',
          },
          cancelButtonColor: '#ef476f',
          confirmButtonText: 'OK',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: d.message,
          icon: 'error',
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn btn-primary w-xs mt-2',
          },
          cancelButtonColor: '#ef476f',
          confirmButtonText: 'OK',
        });
      }
    });
    this.loading.hide();
  }

  get g() {
    return this.startForm.controls;
  }
  get f() {
    return this.verifyOTPForm.controls;
  }
  get h() {
    return this.submitForm.controls;
  }
  testimonials = [
    {
      title: '“I feel confident imposing on myself”',
      content:
        'Vestibulum auctor orci in risus iaculis consequat suscipit felis rutrum aliquet iaculis augue sed tempus In elementum ullamcorper lectus vitae pretium Nullam ultricies diam eu ultrices sagittis.',
    },
    {
      title: '“Our task must be to free widening circle”',
      content:
        'Curabitur eget nulla eget augue dignissim condintum Nunc imperdiet ligula porttitor commodo elementum Vivamus justo risus fringilla suscipit faucibus orci luctus ultrices posuere cubilia curae ultricies cursus.',
    },
    {
      title: "“I've learned that people forget what you”",
      content:
        'Pellentesque lacinia scelerisque arcu in aliquam augue molestie rutrum Fusce dignissim dolor id auctor accumsan vehicula dolor vivamus feugiat odio erat sed  quis Donec nec scelerisque magna',
    },
  ];
}

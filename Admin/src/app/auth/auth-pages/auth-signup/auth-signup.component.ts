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
  showerror: Boolean = false;
  confMessage = '';

  constructor(private fb: FormBuilder, private rs: RegistrationService) {}
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
  verifyEmail() {
    if (this.startForm.invalid) {
      this.startForm.markAllAsTouched();
      return;
    }
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
    });
  }

  SendOTP() {}

  get g() {
    return this.startForm.controls;
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

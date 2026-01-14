import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTomSelectComponent } from './forms-tom-select.component';

describe('FormsTomSelectComponent', () => {
  let component: FormsTomSelectComponent;
  let fixture: ComponentFixture<FormsTomSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsTomSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

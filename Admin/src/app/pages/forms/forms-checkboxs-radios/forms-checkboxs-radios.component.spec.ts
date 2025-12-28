import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCheckboxsRadiosComponent } from './forms-checkboxs-radios.component';

describe('FormsCheckboxsRadiosComponent', () => {
  let component: FormsCheckboxsRadiosComponent;
  let fixture: ComponentFixture<FormsCheckboxsRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsCheckboxsRadiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsCheckboxsRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

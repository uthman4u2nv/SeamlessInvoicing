import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValidationComponent } from './forms-validation.component';

describe('FormsValidationComponent', () => {
  let component: FormsValidationComponent;
  let fixture: ComponentFixture<FormsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

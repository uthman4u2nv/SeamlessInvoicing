import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPickersComponent } from './forms-pickers.component';

describe('FormsPickersComponent', () => {
  let component: FormsPickersComponent;
  let fixture: ComponentFixture<FormsPickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPickersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

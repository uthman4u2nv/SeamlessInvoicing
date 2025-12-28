import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRangeSlidersComponent } from './forms-range-sliders.component';

describe('FormsRangeSlidersComponent', () => {
  let component: FormsRangeSlidersComponent;
  let fixture: ComponentFixture<FormsRangeSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsRangeSlidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsRangeSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

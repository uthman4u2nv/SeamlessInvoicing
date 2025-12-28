import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceUiSweetalertsComponent } from './advance-ui-sweetalerts.component';

describe('AdvanceUiSweetalertsComponent', () => {
  let component: AdvanceUiSweetalertsComponent;
  let fixture: ComponentFixture<AdvanceUiSweetalertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceUiSweetalertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceUiSweetalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

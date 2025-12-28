import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceUiRatingsComponent } from './advance-ui-ratings.component';

describe('AdvanceUiRatingsComponent', () => {
  let component: AdvanceUiRatingsComponent;
  let fixture: ComponentFixture<AdvanceUiRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceUiRatingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceUiRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

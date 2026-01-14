import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceUiSwiperComponent } from './advance-ui-swiper.component';

describe('AdvanceUiSwiperComponent', () => {
  let component: AdvanceUiSwiperComponent;
  let fixture: ComponentFixture<AdvanceUiSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceUiSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceUiSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

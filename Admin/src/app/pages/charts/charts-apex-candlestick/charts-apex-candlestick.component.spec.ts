import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexCandlestickComponent } from './charts-apex-candlestick.component';

describe('ChartsApexCandlestickComponent', () => {
  let component: ChartsApexCandlestickComponent;
  let fixture: ComponentFixture<ChartsApexCandlestickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexCandlestickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexCandlestickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

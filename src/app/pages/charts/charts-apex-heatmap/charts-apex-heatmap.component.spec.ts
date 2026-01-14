import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexHeatmapComponent } from './charts-apex-heatmap.component';

describe('ChartsApexHeatmapComponent', () => {
  let component: ChartsApexHeatmapComponent;
  let fixture: ComponentFixture<ChartsApexHeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexHeatmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

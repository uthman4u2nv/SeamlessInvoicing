import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexRadarComponent } from './charts-apex-radar.component';

describe('ChartsApexRadarComponent', () => {
  let component: ChartsApexRadarComponent;
  let fixture: ComponentFixture<ChartsApexRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexRadarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexTreemapComponent } from './charts-apex-treemap.component';

describe('ChartsApexTreemapComponent', () => {
  let component: ChartsApexTreemapComponent;
  let fixture: ComponentFixture<ChartsApexTreemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexTreemapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexTreemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

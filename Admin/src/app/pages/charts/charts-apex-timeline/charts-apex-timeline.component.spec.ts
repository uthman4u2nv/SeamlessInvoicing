import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexTimelineComponent } from './charts-apex-timeline.component';

describe('ChartsApexTimelineComponent', () => {
  let component: ChartsApexTimelineComponent;
  let fixture: ComponentFixture<ChartsApexTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

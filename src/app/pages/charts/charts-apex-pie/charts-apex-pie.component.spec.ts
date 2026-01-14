import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexPieComponent } from './charts-apex-pie.component';

describe('ChartsApexPieComponent', () => {
  let component: ChartsApexPieComponent;
  let fixture: ComponentFixture<ChartsApexPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

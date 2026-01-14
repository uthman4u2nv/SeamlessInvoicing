import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexBoxplotComponent } from './charts-apex-boxplot.component';

describe('ChartsApexBoxplotComponent', () => {
  let component: ChartsApexBoxplotComponent;
  let fixture: ComponentFixture<ChartsApexBoxplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexBoxplotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexBoxplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

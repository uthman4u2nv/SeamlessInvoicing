import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexScatterComponent } from './charts-apex-scatter.component';

describe('ChartsApexScatterComponent', () => {
  let component: ChartsApexScatterComponent;
  let fixture: ComponentFixture<ChartsApexScatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexScatterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

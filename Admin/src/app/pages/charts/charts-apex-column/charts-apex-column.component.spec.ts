import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexColumnComponent } from './charts-apex-column.component';

describe('ChartsApexColumnComponent', () => {
  let component: ChartsApexColumnComponent;
  let fixture: ComponentFixture<ChartsApexColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

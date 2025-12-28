import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexPolarComponent } from './charts-apex-polar.component';

describe('ChartsApexPolarComponent', () => {
  let component: ChartsApexPolarComponent;
  let fixture: ComponentFixture<ChartsApexPolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexPolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexPolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

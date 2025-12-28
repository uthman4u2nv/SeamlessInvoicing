import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexMixedComponent } from './charts-apex-mixed.component';

describe('ChartsApexMixedComponent', () => {
  let component: ChartsApexMixedComponent;
  let fixture: ComponentFixture<ChartsApexMixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexMixedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexMixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

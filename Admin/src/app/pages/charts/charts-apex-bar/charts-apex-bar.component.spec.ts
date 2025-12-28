import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexBarComponent } from './charts-apex-bar.component';

describe('ChartsApexBarComponent', () => {
  let component: ChartsApexBarComponent;
  let fixture: ComponentFixture<ChartsApexBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

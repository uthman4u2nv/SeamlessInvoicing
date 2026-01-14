import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexRadialbarComponent } from './charts-apex-radialbar.component';

describe('ChartsApexRadialbarComponent', () => {
  let component: ChartsApexRadialbarComponent;
  let fixture: ComponentFixture<ChartsApexRadialbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexRadialbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexRadialbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

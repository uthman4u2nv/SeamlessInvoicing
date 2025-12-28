import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexBubbleComponent } from './charts-apex-bubble.component';

describe('ChartsApexBubbleComponent', () => {
  let component: ChartsApexBubbleComponent;
  let fixture: ComponentFixture<ChartsApexBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsApexBubbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

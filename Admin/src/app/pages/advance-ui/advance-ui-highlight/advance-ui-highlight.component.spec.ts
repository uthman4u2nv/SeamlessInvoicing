import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceUiHighlightComponent } from './advance-ui-highlight.component';

describe('AdvanceUiHighlightComponent', () => {
  let component: AdvanceUiHighlightComponent;
  let fixture: ComponentFixture<AdvanceUiHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceUiHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceUiHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

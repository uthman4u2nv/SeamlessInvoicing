import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceUiScrollbarComponent } from './advance-ui-scrollbar.component';

describe('AdvanceUiScrollbarComponent', () => {
  let component: AdvanceUiScrollbarComponent;
  let fixture: ComponentFixture<AdvanceUiScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceUiScrollbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceUiScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

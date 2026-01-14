import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceUiScrollspyComponent } from './advance-ui-scrollspy.component';

describe('AdvanceUiScrollspyComponent', () => {
  let component: AdvanceUiScrollspyComponent;
  let fixture: ComponentFixture<AdvanceUiScrollspyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceUiScrollspyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceUiScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

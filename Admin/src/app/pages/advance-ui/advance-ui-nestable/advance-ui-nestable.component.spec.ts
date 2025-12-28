import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceUiNestableComponent } from './advance-ui-nestable.component';

describe('AdvanceUiNestableComponent', () => {
  let component: AdvanceUiNestableComponent;
  let fixture: ComponentFixture<AdvanceUiNestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceUiNestableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceUiNestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

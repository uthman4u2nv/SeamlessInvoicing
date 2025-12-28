import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAccordionsComponent } from './ui-accordions.component';

describe('UiAccordionsComponent', () => {
  let component: UiAccordionsComponent;
  let fixture: ComponentFixture<UiAccordionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAccordionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

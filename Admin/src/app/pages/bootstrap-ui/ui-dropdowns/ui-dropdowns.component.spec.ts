import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDropdownsComponent } from './ui-dropdowns.component';

describe('UiDropdownsComponent', () => {
  let component: UiDropdownsComponent;
  let fixture: ComponentFixture<UiDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDropdownsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

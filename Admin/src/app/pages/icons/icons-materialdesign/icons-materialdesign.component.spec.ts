import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsMaterialdesignComponent } from './icons-materialdesign.component';

describe('IconsMaterialdesignComponent', () => {
  let component: IconsMaterialdesignComponent;
  let fixture: ComponentFixture<IconsMaterialdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsMaterialdesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsMaterialdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

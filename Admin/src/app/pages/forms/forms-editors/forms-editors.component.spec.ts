import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEditorsComponent } from './forms-editors.component';

describe('FormsEditorsComponent', () => {
  let component: FormsEditorsComponent;
  let fixture: ComponentFixture<FormsEditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsEditorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

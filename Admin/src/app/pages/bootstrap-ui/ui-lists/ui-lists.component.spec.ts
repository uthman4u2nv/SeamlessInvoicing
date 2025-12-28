import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiListsComponent } from './ui-lists.component';

describe('UiListsComponent', () => {
  let component: UiListsComponent;
  let fixture: ComponentFixture<UiListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

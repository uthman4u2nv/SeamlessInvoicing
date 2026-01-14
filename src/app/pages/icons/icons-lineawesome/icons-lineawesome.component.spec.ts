import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLineawesomeComponent } from './icons-lineawesome.component';

describe('IconsLineawesomeComponent', () => {
  let component: IconsLineawesomeComponent;
  let fixture: ComponentFixture<IconsLineawesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsLineawesomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsLineawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

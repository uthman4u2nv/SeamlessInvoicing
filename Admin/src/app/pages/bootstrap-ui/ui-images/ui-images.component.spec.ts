import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiImagesComponent } from './ui-images.component';

describe('UiImagesComponent', () => {
  let component: UiImagesComponent;
  let fixture: ComponentFixture<UiImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

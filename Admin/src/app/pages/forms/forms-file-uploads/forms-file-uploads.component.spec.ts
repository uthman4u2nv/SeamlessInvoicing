import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsFileUploadsComponent } from './forms-file-uploads.component';

describe('FormsFileUploadsComponent', () => {
  let component: FormsFileUploadsComponent;
  let fixture: ComponentFixture<FormsFileUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsFileUploadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsFileUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

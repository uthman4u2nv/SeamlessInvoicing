import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexAreaComponent } from './apex-area.component';

describe('ApexAreaComponent', () => {
  let component: ApexAreaComponent;
  let fixture: ComponentFixture<ApexAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

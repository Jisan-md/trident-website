import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareForEducationComponent } from './software-for-education.component';

describe('SoftwareForEducationComponent', () => {
  let component: SoftwareForEducationComponent;
  let fixture: ComponentFixture<SoftwareForEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareForEducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareForEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

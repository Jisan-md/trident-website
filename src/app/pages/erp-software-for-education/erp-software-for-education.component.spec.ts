import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSoftwareForEducationComponent } from './erp-software-for-education.component';

describe('ErpSoftwareForEducationComponent', () => {
  let component: ErpSoftwareForEducationComponent;
  let fixture: ComponentFixture<ErpSoftwareForEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpSoftwareForEducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpSoftwareForEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetManagementSoftwareComponent } from './fleet-management-software.component';

describe('FleetManagementSoftwareComponent', () => {
  let component: FleetManagementSoftwareComponent;
  let fixture: ComponentFixture<FleetManagementSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FleetManagementSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FleetManagementSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

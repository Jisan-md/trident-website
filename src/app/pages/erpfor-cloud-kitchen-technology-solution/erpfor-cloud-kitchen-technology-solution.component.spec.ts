import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforCloudKitchenTechnologySolutionComponent } from './erpfor-cloud-kitchen-technology-solution.component';

describe('ERPforCloudKitchenTechnologySolutionComponent', () => {
  let component: ERPforCloudKitchenTechnologySolutionComponent;
  let fixture: ComponentFixture<ERPforCloudKitchenTechnologySolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforCloudKitchenTechnologySolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforCloudKitchenTechnologySolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

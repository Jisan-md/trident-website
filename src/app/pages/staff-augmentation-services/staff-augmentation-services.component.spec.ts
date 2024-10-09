import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAugmentationServicesComponent } from './staff-augmentation-services.component';

describe('StaffAugmentationServicesComponent', () => {
  let component: StaffAugmentationServicesComponent;
  let fixture: ComponentFixture<StaffAugmentationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffAugmentationServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffAugmentationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

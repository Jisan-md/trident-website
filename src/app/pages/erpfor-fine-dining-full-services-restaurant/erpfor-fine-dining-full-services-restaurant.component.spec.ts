import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforFineDiningFullServicesRestaurantComponent } from './erpfor-fine-dining-full-services-restaurant.component';

describe('ERPforFineDiningFullServicesRestaurantComponent', () => {
  let component: ERPforFineDiningFullServicesRestaurantComponent;
  let fixture: ComponentFixture<ERPforFineDiningFullServicesRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforFineDiningFullServicesRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforFineDiningFullServicesRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

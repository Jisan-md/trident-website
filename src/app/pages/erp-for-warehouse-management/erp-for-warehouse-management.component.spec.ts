import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpForWarehouseManagementComponent } from './erp-for-warehouse-management.component';

describe('ErpForWarehouseManagementComponent', () => {
  let component: ErpForWarehouseManagementComponent;
  let fixture: ComponentFixture<ErpForWarehouseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpForWarehouseManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpForWarehouseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

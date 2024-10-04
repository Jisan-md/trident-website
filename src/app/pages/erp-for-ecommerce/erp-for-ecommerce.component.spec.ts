import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpForEcommerceComponent } from './erp-for-ecommerce.component';

describe('ErpForEcommerceComponent', () => {
  let component: ErpForEcommerceComponent;
  let fixture: ComponentFixture<ErpForEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpForEcommerceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpForEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

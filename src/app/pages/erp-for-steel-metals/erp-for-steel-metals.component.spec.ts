import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpForSteelMetalsComponent } from './erp-for-steel-metals.component';

describe('ErpForSteelMetalsComponent', () => {
  let component: ErpForSteelMetalsComponent;
  let fixture: ComponentFixture<ErpForSteelMetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpForSteelMetalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpForSteelMetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

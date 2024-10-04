import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforPharmacyComponent } from './erpfor-pharmacy.component';

describe('ERPforPharmacyComponent', () => {
  let component: ERPforPharmacyComponent;
  let fixture: ComponentFixture<ERPforPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforPharmacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

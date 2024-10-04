import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpForforHiTechAndElectronicsManufacturingComponent } from './erp-forfor-hi-tech-and-electronics-manufacturing.component';

describe('ErpForforHiTechAndElectronicsManufacturingComponent', () => {
  let component: ErpForforHiTechAndElectronicsManufacturingComponent;
  let fixture: ComponentFixture<ErpForforHiTechAndElectronicsManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpForforHiTechAndElectronicsManufacturingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpForforHiTechAndElectronicsManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

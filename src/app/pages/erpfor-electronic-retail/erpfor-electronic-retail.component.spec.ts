import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforElectronicRetailComponent } from './erpfor-electronic-retail.component';

describe('ERPforElectronicRetailComponent', () => {
  let component: ERPforElectronicRetailComponent;
  let fixture: ComponentFixture<ERPforElectronicRetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforElectronicRetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforElectronicRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

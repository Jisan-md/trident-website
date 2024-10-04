import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforApparelManufacturingComponent } from './erpfor-apparel-manufacturing.component';

describe('ERPforApparelManufacturingComponent', () => {
  let component: ERPforApparelManufacturingComponent;
  let fixture: ComponentFixture<ERPforApparelManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforApparelManufacturingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforApparelManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

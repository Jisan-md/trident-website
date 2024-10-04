import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforLuxuryJewelryItemsComponent } from './erpfor-luxury-jewelry-items.component';

describe('ERPforLuxuryJewelryItemsComponent', () => {
  let component: ERPforLuxuryJewelryItemsComponent;
  let fixture: ComponentFixture<ERPforLuxuryJewelryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforLuxuryJewelryItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforLuxuryJewelryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

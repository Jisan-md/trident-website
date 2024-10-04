import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforGrocerySupermarketComponent } from './erpfor-grocery-supermarket.component';

describe('ERPforGrocerySupermarketComponent', () => {
  let component: ERPforGrocerySupermarketComponent;
  let fixture: ComponentFixture<ERPforGrocerySupermarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforGrocerySupermarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforGrocerySupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

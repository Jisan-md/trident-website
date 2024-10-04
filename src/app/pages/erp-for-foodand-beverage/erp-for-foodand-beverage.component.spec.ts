import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpForFoodandBeverageComponent } from './erp-for-foodand-beverage.component';

describe('ErpForFoodandBeverageComponent', () => {
  let component: ErpForFoodandBeverageComponent;
  let fixture: ComponentFixture<ErpForFoodandBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpForFoodandBeverageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpForFoodandBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

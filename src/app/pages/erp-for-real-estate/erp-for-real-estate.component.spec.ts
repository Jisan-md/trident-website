import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpForRealEstateComponent } from './erp-for-real-estate.component';

describe('ErpForRealEstateComponent', () => {
  let component: ErpForRealEstateComponent;
  let fixture: ComponentFixture<ErpForRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpForRealEstateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpForRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpForRealEstateCrmComponent } from './erp-for-real-estate-crm.component';

describe('ErpForRealEstateCrmComponent', () => {
  let component: ErpForRealEstateCrmComponent;
  let fixture: ComponentFixture<ErpForRealEstateCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpForRealEstateCrmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpForRealEstateCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

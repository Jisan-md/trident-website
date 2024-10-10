import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpServicesComponent } from './erp-services.component';

describe('ErpServicesComponent', () => {
  let component: ErpServicesComponent;
  let fixture: ComponentFixture<ErpServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPServicesComponent } from './erp-services.component';

describe('ERPServicesComponent', () => {
  let component: ERPServicesComponent;
  let fixture: ComponentFixture<ERPServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

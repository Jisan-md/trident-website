import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforLSCentralImplementationPlansComponent } from './erpfor-lscentral-implementation-plans.component';

describe('ERPforLSCentralImplementationPlansComponent', () => {
  let component: ERPforLSCentralImplementationPlansComponent;
  let fixture: ComponentFixture<ERPforLSCentralImplementationPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforLSCentralImplementationPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforLSCentralImplementationPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

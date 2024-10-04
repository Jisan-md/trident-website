import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforicdPortOperationsComponent } from './erpforicd-port-operations.component';

describe('ERPforicdPortOperationsComponent', () => {
  let component: ERPforicdPortOperationsComponent;
  let fixture: ComponentFixture<ERPforicdPortOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforicdPortOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforicdPortOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

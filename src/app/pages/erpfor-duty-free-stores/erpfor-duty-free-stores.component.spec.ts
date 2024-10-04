import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforDutyFreeStoresComponent } from './erpfor-duty-free-stores.component';

describe('ERPforDutyFreeStoresComponent', () => {
  let component: ERPforDutyFreeStoresComponent;
  let fixture: ComponentFixture<ERPforDutyFreeStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforDutyFreeStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforDutyFreeStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

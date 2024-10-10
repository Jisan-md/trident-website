import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmServicesComponent } from './crm-services.component';

describe('CrmServicesComponent', () => {
  let component: CrmServicesComponent;
  let fixture: ComponentFixture<CrmServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrmServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrmServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

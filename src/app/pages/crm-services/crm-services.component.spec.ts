import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMServicesComponent } from './crm-services.component';

describe('CRMServicesComponent', () => {
  let component: CRMServicesComponent;
  let fixture: ComponentFixture<CRMServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CRMServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CRMServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

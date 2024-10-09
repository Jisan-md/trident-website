import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotYourDealComponent } from './spot-your-deal.component';

describe('SpotYourDealComponent', () => {
  let component: SpotYourDealComponent;
  let fixture: ComponentFixture<SpotYourDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpotYourDealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotYourDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

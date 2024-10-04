import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforCasualRestaurantsComponent } from './erpfor-casual-restaurants.component';

describe('ERPforCasualRestaurantsComponent', () => {
  let component: ERPforCasualRestaurantsComponent;
  let fixture: ComponentFixture<ERPforCasualRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforCasualRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforCasualRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

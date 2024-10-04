import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPforFashionFootwearComponent } from './erpfor-fashion-footwear.component';

describe('ERPforFashionFootwearComponent', () => {
  let component: ERPforFashionFootwearComponent;
  let fixture: ComponentFixture<ERPforFashionFootwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPforFashionFootwearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPforFashionFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

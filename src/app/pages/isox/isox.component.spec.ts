import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoxComponent } from './isox.component';

describe('IsoxComponent', () => {
  let component: IsoxComponent;
  let fixture: ComponentFixture<IsoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

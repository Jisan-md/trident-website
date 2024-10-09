import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMACComponent } from './dmac.component';

describe('DMACComponent', () => {
  let component: DMACComponent;
  let fixture: ComponentFixture<DMACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DMACComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DMACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

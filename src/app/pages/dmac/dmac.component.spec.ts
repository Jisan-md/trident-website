import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmacComponent } from './dmac.component';

describe('DmacComponent', () => {
  let component: DmacComponent;
  let fixture: ComponentFixture<DmacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DmacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDMXComponent } from './idmx.component';

describe('IDMXComponent', () => {
  let component: IDMXComponent;
  let fixture: ComponentFixture<IDMXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IDMXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IDMXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

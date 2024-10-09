import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdmxComponent } from './idmx.component';

describe('IdmxComponent', () => {
  let component: IdmxComponent;
  let fixture: ComponentFixture<IdmxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdmxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdmxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISPXComponent } from './ispx.component';

describe('ISPXComponent', () => {
  let component: ISPXComponent;
  let fixture: ComponentFixture<ISPXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ISPXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISPXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

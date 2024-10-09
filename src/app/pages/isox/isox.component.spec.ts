import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISOXComponent } from './isox.component';

describe('ISOXComponent', () => {
  let component: ISOXComponent;
  let fixture: ComponentFixture<ISOXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ISOXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISOXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

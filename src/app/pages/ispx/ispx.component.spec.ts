import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IspxComponent } from './ispx.component';

describe('IspxComponent', () => {
  let component: IspxComponent;
  let fixture: ComponentFixture<IspxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IspxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IspxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

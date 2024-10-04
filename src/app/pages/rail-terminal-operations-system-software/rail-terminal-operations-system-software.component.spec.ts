import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailTerminalOperationsSystemSoftwareComponent } from './rail-terminal-operations-system-software.component';

describe('RailTerminalOperationsSystemSoftwareComponent', () => {
  let component: RailTerminalOperationsSystemSoftwareComponent;
  let fixture: ComponentFixture<RailTerminalOperationsSystemSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RailTerminalOperationsSystemSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RailTerminalOperationsSystemSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

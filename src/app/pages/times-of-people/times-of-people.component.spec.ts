import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesOfPeopleComponent } from './times-of-people.component';

describe('TimesOfPeopleComponent', () => {
  let component: TimesOfPeopleComponent;
  let fixture: ComponentFixture<TimesOfPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimesOfPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimesOfPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

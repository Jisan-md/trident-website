import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligentDataMigrationComponent } from './intelligent-data-migration.component';

describe('IntelligentDataMigrationComponent', () => {
  let component: IntelligentDataMigrationComponent;
  let fixture: ComponentFixture<IntelligentDataMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntelligentDataMigrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntelligentDataMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

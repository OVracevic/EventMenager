import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInTabComponent } from './log-in-tab.component';

describe('LogInTabComponent', () => {
  let component: LogInTabComponent;
  let fixture: ComponentFixture<LogInTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

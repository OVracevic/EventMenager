import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanInfoComponent } from './dan-info.component';

describe('DanInfoComponent', () => {
  let component: DanInfoComponent;
  let fixture: ComponentFixture<DanInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

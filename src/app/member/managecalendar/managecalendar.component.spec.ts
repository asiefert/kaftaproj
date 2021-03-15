import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecalendarComponent } from './managecalendar.component';

describe('ManagecalendarComponent', () => {
  let component: ManagecalendarComponent;
  let fixture: ComponentFixture<ManagecalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

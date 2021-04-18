import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringTypeComponent } from './tutoring-type.component';

describe('TutoringTypeComponent', () => {
  let component: TutoringTypeComponent;
  let fixture: ComponentFixture<TutoringTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

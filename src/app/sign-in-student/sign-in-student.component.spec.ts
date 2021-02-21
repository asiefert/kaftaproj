import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInStudentComponent } from './sign-in-student.component';

describe('SignInStudentComponent', () => {
  let component: SignInStudentComponent;
  let fixture: ComponentFixture<SignInStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

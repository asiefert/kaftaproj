import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInTutorComponent } from './sign-in-tutor.component';

describe('SignInTutorComponent', () => {
  let component: SignInTutorComponent;
  let fixture: ComponentFixture<SignInTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

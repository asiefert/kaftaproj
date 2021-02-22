import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallmembersComponent } from './showallmembers.component';

describe('ShowallmembersComponent', () => {
  let component: ShowallmembersComponent;
  let fixture: ComponentFixture<ShowallmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallmembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsbComponent } from './clubsb.component';

describe('ClubsbComponent', () => {
  let component: ClubsbComponent;
  let fixture: ComponentFixture<ClubsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

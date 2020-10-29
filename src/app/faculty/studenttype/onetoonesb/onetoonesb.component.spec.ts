import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetoonesbComponent } from './onetoonesb.component';

describe('OnetoonesbComponent', () => {
  let component: OnetoonesbComponent;
  let fixture: ComponentFixture<OnetoonesbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetoonesbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetoonesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

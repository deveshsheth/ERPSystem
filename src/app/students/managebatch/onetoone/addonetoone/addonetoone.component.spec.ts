import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonetooneComponent } from './addonetoone.component';

describe('AddonetooneComponent', () => {
  let component: AddonetooneComponent;
  let fixture: ComponentFixture<AddonetooneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonetooneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonetooneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

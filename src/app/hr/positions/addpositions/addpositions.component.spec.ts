import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpositionsComponent } from './addpositions.component';

describe('AddpositionsComponent', () => {
  let component: AddpositionsComponent;
  let fixture: ComponentFixture<AddpositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

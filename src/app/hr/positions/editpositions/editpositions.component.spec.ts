import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpositionsComponent } from './editpositions.component';

describe('EditpositionsComponent', () => {
  let component: EditpositionsComponent;
  let fixture: ComponentFixture<EditpositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgeneralComponent } from './addgeneral.component';

describe('AddgeneralComponent', () => {
  let component: AddgeneralComponent;
  let fixture: ComponentFixture<AddgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

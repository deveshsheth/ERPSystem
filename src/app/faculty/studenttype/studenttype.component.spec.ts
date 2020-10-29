import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttypeComponent } from './studenttype.component';

describe('StudenttypeComponent', () => {
  let component: StudenttypeComponent;
  let fixture: ComponentFixture<StudenttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

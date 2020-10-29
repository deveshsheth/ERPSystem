import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralsbComponent } from './generalsb.component';

describe('GeneralsbComponent', () => {
  let component: GeneralsbComponent;
  let fixture: ComponentFixture<GeneralsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

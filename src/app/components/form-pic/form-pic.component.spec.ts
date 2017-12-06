import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPicComponent } from './form-pic.component';

describe('FormPicComponent', () => {
  let component: FormPicComponent;
  let fixture: ComponentFixture<FormPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

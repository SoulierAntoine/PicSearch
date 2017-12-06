import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPicComponent } from './detail-pic.component';

describe('DetailPicComponent', () => {
  let component: DetailPicComponent;
  let fixture: ComponentFixture<DetailPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

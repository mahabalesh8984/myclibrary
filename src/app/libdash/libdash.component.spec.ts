import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibdashComponent } from './libdash.component';

describe('LibdashComponent', () => {
  let component: LibdashComponent;
  let fixture: ComponentFixture<LibdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

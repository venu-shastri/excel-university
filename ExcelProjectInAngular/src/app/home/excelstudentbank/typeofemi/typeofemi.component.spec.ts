import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofemiComponent } from './typeofemi.component';

describe('TypeofemiComponent', () => {
  let component: TypeofemiComponent;
  let fixture: ComponentFixture<TypeofemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeofemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedemivalueComponent } from './calculatedemivalue.component';

describe('CalculatedemivalueComponent', () => {
  let component: CalculatedemivalueComponent;
  let fixture: ComponentFixture<CalculatedemivalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatedemivalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedemivalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

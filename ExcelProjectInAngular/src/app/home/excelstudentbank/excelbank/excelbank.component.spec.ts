import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelbankComponent } from './excelbank.component';

describe('ExcelbankComponent', () => {
  let component: ExcelbankComponent;
  let fixture: ComponentFixture<ExcelbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

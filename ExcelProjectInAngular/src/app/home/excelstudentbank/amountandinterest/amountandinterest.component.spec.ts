import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountandinterestComponent } from './amountandinterest.component';

describe('AmountandinterestComponent', () => {
  let component: AmountandinterestComponent;
  let fixture: ComponentFixture<AmountandinterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountandinterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountandinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

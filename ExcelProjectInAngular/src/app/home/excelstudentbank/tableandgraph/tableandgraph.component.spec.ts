import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableandgraphComponent } from './tableandgraph.component';

describe('TableandgraphComponent', () => {
  let component: TableandgraphComponent;
  let fixture: ComponentFixture<TableandgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableandgraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableandgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

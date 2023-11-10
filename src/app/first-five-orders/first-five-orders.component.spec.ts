import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFiveOrdersComponent } from './first-five-orders.component';

describe('FirstFiveOrdersComponent', () => {
  let component: FirstFiveOrdersComponent;
  let fixture: ComponentFixture<FirstFiveOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstFiveOrdersComponent]
    });
    fixture = TestBed.createComponent(FirstFiveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

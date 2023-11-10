import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOtherOrdersComponent } from './all-other-orders.component';

describe('AllOtherOrdersComponent', () => {
  let component: AllOtherOrdersComponent;
  let fixture: ComponentFixture<AllOtherOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllOtherOrdersComponent]
    });
    fixture = TestBed.createComponent(AllOtherOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

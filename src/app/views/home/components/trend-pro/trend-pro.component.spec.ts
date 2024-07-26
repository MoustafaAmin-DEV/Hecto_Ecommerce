import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendProComponent } from './trend-pro.component';

describe('TrendProComponent', () => {
  let component: TrendProComponent;
  let fixture: ComponentFixture<TrendProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendProComponent]
    });
    fixture = TestBed.createComponent(TrendProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

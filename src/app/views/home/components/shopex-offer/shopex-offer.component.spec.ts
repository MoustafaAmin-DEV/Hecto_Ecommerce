import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopexOfferComponent } from './shopex-offer.component';

describe('ShopexOfferComponent', () => {
  let component: ShopexOfferComponent;
  let fixture: ComponentFixture<ShopexOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopexOfferComponent]
    });
    fixture = TestBed.createComponent(ShopexOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

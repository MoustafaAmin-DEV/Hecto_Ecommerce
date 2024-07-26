import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEcommerceComponent } from './our-ecommerce.component';

describe('OurEcommerceComponent', () => {
  let component: OurEcommerceComponent;
  let fixture: ComponentFixture<OurEcommerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurEcommerceComponent]
    });
    fixture = TestBed.createComponent(OurEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslaterComponent } from './newslater.component';

describe('NewslaterComponent', () => {
  let component: NewslaterComponent;
  let fixture: ComponentFixture<NewslaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewslaterComponent]
    });
    fixture = TestBed.createComponent(NewslaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

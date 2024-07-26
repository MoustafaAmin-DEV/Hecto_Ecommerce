import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompaniesComponent } from './image-companies.component';

describe('ImageCompaniesComponent', () => {
  let component: ImageCompaniesComponent;
  let fixture: ComponentFixture<ImageCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCompaniesComponent]
    });
    fixture = TestBed.createComponent(ImageCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

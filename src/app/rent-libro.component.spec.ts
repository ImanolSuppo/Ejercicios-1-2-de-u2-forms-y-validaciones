import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentLibroComponent } from './rent-libro.component';

describe('RentLibroComponent', () => {
  let component: RentLibroComponent;
  let fixture: ComponentFixture<RentLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentLibroComponent]
    });
    fixture = TestBed.createComponent(RentLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

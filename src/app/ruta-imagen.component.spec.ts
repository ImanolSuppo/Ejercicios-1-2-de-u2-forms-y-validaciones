import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaImagenComponent } from './ruta-imagen.component';

describe('RutaImagenComponent', () => {
  let component: RutaImagenComponent;
  let fixture: ComponentFixture<RutaImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutaImagenComponent]
    });
    fixture = TestBed.createComponent(RutaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

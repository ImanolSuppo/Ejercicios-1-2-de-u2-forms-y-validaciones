import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaLibrosComponent } from './tarjeta-libros.component';

describe('TarjetaLibrosComponent', () => {
  let component: TarjetaLibrosComponent;
  let fixture: ComponentFixture<TarjetaLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaLibrosComponent]
    });
    fixture = TestBed.createComponent(TarjetaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

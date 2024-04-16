import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorBibliotecaComponent } from './contenedor-biblioteca.component';

describe('ContenedorBibliotecaComponent', () => {
  let component: ContenedorBibliotecaComponent;
  let fixture: ComponentFixture<ContenedorBibliotecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorBibliotecaComponent]
    });
    fixture = TestBed.createComponent(ContenedorBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

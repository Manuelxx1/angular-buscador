
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuarioModelo } from '../modelo';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './buscador.html',
  styleUrls: ['./buscador.css']
})
export class Buscador {
  form: FormGroup;
  resultados: UsuarioModelo[] = [];

  constructor(private fb: FormBuilder, private usuario: Usuario) {
    this.form = this.fb.group({
      nombre: ['']
    });
  }

  buscar() {
    const nombre = this.form.get('nombre')?.value;
    this.usuario.buscar(nombre).subscribe((data: UsuarioModelo[]) => {
      this.resultados = data;
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
regraMinimoCaractere: boolean = false;
regraMaximoCaractere: boolean = false;
regraLetraMaiuscula: boolean = false;
regraCaractereEspecial: boolean = false;
regraNumerosLetras: boolean = false;


validarSenha (senha: string): void {
  const rxMin8 = /^.{8,}$/;
  const rxMax16 = /^.{0,16}$/;
  const rxMaiuscula = /[A-Z]/;
  const rxEspecial = /[^a-zA-Z0-9]/;
  const rxNumero = /\d/;
  const rxLetra = /[A-Za-z]/;

  this.regraMinimoCaractere = rxMin8.test(senha);
  this.regraMaximoCaractere = rxMax16.test(senha);
  this.regraLetraMaiuscula = rxMaiuscula.test(senha);
  this.regraCaractereEspecial = rxEspecial.test(senha);
  this.regraNumerosLetras = rxNumero.test(senha) && rxLetra.test(senha);
}
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { stagger60ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'vex-modal-cadastrar-cliente',
  templateUrl: './modal-cadastrar-cliente.component.html',
  styleUrls: ['./modal-cadastrar-cliente.component.scss']
})
export class ModalCadastrarClienteComponent implements OnInit {
  form: FormGroup;

  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder) {
    this.form = this.fb.group({
      nomeCompleto: [''],
      cpf: [''],
      dtNascimento: [''],
      sexo: [''],
      telefone: [''],
      cep: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      complemento: [''],
      cidade: [''],
      estado: [''],
    });
  }

  ngOnInit(): void {}

}

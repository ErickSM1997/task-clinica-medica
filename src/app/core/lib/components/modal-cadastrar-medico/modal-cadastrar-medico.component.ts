import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'vex-modal-cadastrar-medico',
  templateUrl: './modal-cadastrar-medico.component.html',
  styleUrls: ['./modal-cadastrar-medico.component.scss']
})
export class ModalCadastrarMedicoComponent implements OnInit {
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

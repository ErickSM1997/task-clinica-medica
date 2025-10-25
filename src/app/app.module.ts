import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { MedicoComponent } from './Pages/medico/medico.component';
import { ClienteComponent } from './Pages/cliente/cliente.component';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import { ModalCadastrarClienteComponent } from './core/lib/components/modal-cadastrar-cliente/modal-cadastrar-cliente.component';
import { ModalCadastrarMedicoComponent } from './core/lib/components/modal-cadastrar-medico/modal-cadastrar-medico.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

const globalFormFieldOptions: MatFormFieldDefaultOptions = {
  appearance: "standard",
};

@NgModule({
  declarations: [AppComponent, MedicoComponent, ClienteComponent, ModalCadastrarClienteComponent, ModalCadastrarMedicoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IconModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: globalFormFieldOptions,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

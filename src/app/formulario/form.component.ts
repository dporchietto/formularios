import { Component } from '@angular/core';
import { Formulario } from '../formulario';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent {
  programaControl = new FormControl('', Validators.required);
  programaSelectFormControl = new FormControl('', Validators.required);

  programas = ['Programa 1', 'Programa 2'];

  profesion = ['Profesional', 'Estudiante'];

  localidad = ['Capital', 'Villa Maria', 'Villa Nueva']

  id = 1

  userEmail = 'dporchietto@gmail.com'
  userDni = 34689995

  model = new Formulario(this.id, '','',this.userEmail,this.userDni,0,'','',0,'','','',0,'','','','','','',false,'')

  submitted = false;

  onSubmit() { this.submitted = true; }

}
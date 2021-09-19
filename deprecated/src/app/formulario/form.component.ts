import { Component } from '@angular/core';
import { Formulario } from '../formulario';
import {FormControl, Validators} from '@angular/forms';
import { ɵHttpInterceptingHandler } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent {

  public userEmail : string;
  public selectedPrograma : string;
  public programas:Array<string>;
  public profesion:Array<string>;
  public localidad:Array<string>;
  public userDni: number;

  constructor() { 
      this.userEmail = "dporchietto@gmail.com";
      this.programas = ['Programa 1', 'Programa 2'];
      this.profesion = ['Profesional', 'Estudiante'];
      this.localidad = ['Capital', 'Villa Maria', 'Villa Nueva']
      this.userDni = 34689995
      this.selectedPrograma =''
  }  
  
  submitted = false;

  programaControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('',[Validators.required,Validators.email]);
  programaSelectFormControl = new FormControl('', Validators.required);

  onSubmit(f: NgForm) { 
    let model = new Formulario(1,'',this.selectedPrograma,this.userEmail,this.userDni,0,'','',0,'','','',0,'','','','','','',false,'')
    console.log(model)
    this.submitted = true; }
}
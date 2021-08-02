export class Formulario {

    constructor(
      public id: number,
      public tipoUsuario: string,
      public programa: string,
      public email: string,
      public dni: number,
      public edad: number,
      public sexo: string,
      public profesion: string,
      public telefono: number,
      public localidad: string,
      public medio: string,
      public actividad: string,
      public cuit: number,
      public rubro: string,
      public tipoCanal: string,
      public canalDigital: string,
      public canalFisico: string,
      public nivel: string,
      public tipoComercializacion: string,
      public sucursales: boolean,
      public domicilio: string
    ) {  }
  
  }
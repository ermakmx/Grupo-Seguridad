import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-grupo-seguridad',
  templateUrl: './grupo-seguridad.component.html',
  styleUrls: ['./grupo-seguridad.component.scss']
})
export class GrupoSeguridadComponent implements OnInit {
  groups: any[] = [];
  modulos: any[] = [];
  visible = false;
  filter = '';

  constructor(private iconSet: IconSetService) {
    this.iconSet.icons = { ...freeSet };
  }

  ngOnInit(): void {
    this.getGroups()
  }

  getGroups(){
    this.groups = [
      {
        no: 94,
        nombre: 'Lista de grupos',
        estado: false,
        select: false
      },
      {
        no: 95,
        nombre: 'Captura',
        estado: false,
        select: false
      },
      {
        no: 96,
        nombre: 'Captura calificaciones',
        estado: false,
        select: false
      },
      {
        no: 101,
        nombre: 'Cambio de contraseña',
        estado: false,
        select: false
      },
      {
        no: 129,
        nombre: 'Agregar incidencia al alumno',
        estado: false,
        select: false
      },
      {
        no: 131,
        nombre: 'Incidencias',
        estado: false,
        select: false
      },
      {
        no: 141,
        nombre: 'Cambio de calificaciones',
        estado: false,
        select: false
      },
      {
        no: 183,
        nombre: 'Captura ingles',
        estado: false,
        select: false
      },
      {
        no: 209,
        nombre: 'Listas oficiales',
        estado: false,
        select: false
      },
      {
        no: 1012,
        nombre: 'Autoevaluacion de profesores',
        estado: true,
        select: false
      }
    ]
  }

  selectAll(){
    for(let group of this.groups) {
      group.select = !group.select;
    }
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
    this.modulos = [
      {
        no: 4,
        nombre: 'Sistema/Catalogo/Carreras',
        estado: true,
        select: false
      },
      {
        no: 5,
        nombre: 'Sistema/Catalogo/Unidad Academica',
        estado: true,
        select: false
      },
      {
        no: 6,
        nombre: 'Sistema/Catalogo/Periodo',
        estado: true,
        select: false
      },
      {
        no: 11,
        nombre: 'Sistema/Catalogo/Usuarios',
        estado: true,
        select: false
      },
      {
        no: 12,
        nombre: 'Sistema/Catalogo/Sist. Nachillerato',
        estado: true,
        select: false
      },
      {
        no: 13,
        nombre: 'Sistema/Catalogo/Ciudades',
        estado: true,
        select: false
      },
      {
        no: 970,
        nombre: 'Sistema/Comun/Liberador Servicios',
        estado: false,
        select: false
      },
      {
        no: 1024,
        nombre: 'Sistema/Comun/JSTL',
        estado: false,
        select: false
      },
      {
        no: 61,
        nombre: 'Sistema/Comun/Turnos',
        estado: true,
        select: false
      },
      {
        no: 318,
        nombre: 'Sistema/Comun/Pestañas empleados',
        estado: false,
        select: false
      },
    ]
  }

  openModal(event: any) {
    this.visible = event;
  }

  addUser(){
    this.modulos.forEach((module, index) => {
      if(module.select == true){
        const addModule = module;
        addModule.select = false;
        const nombre = addModule.nombre.split('/');
        addModule.nombre = nombre[2]
        this.groups.push(module);
        this.modulos[index].select = false;
      }
    })
    this.visible = !this.visible;
  }


  deleteGroup(id: number){
    this.groups = this.groups.filter(group => group.no != id);
  }

  deleteAllGroup(){
    const newArray = [];
    for(const group of this.groups){
      if(group.select == false) newArray.push(group);
    }

    this.groups = newArray;
  }
}

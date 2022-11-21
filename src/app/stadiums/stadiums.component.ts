import { Component, OnInit } from '@angular/core';
import { Stadium } from './Stadium';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.scss']
})
export class StadiumsComponent implements OnInit {

  stadiums :Stadium[] = [
    {
      nombre:"Estadio de Lusail",
      capacidad:80000,
    },
    {
      nombre:"Estadio Al Janoub",
      capacidad: 40000,
    },
    {
      nombre:"Estadio 974",
      capacidad: 40000,
    },
    {
      nombre:"Estadio Internacional Khalifa",
      capacidad: 45416
    },
    {
      nombre:"Estadio Al Thumama",
      capacidad: 40000,
    },
    {
      nombre:"Estadio Al Bayt",
      capacidad: 60000,
    },
    {
      nombre:"Estadio Ciudad de la Educación",
      capacidad: 40000,
    },
    {
      nombre:"Estadio Áhmad bin Ali",
      capacidad: 60000,
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

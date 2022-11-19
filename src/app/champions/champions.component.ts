import { Component, OnInit } from '@angular/core';
import { Champion } from './Champion';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {

  champions : Champion[] = [
    {
      nombre: "Brasil",
      numeroCopas: 5,
    },
    {
      nombre: "Alemania",
      numeroCopas: 4,

    }, 
    {
      nombre: "Italia",
      numeroCopas: 4,
    }, 
    {
      nombre: "Argentina",
      numeroCopas: 2,
    }, 
    {
      nombre: "Francia",
      numeroCopas: 2,
    }, 
    {
      nombre: "Uruguay",
      numeroCopas: 2,
    }, 
    {
      nombre: "Inglaterra",
      numeroCopas: 1,
    }, 
    {
      nombre: "España",
      numeroCopas: 1,
    }, 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

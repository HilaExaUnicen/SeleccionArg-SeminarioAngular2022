import { Component, OnInit } from '@angular/core';
import { Player } from './Player';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  jugadores: Player[] = [
    {
      nombre: 'Lionel Messi',
      posicion: 'Delantero',
      equipo: 'PSG',
      edad: 35,
      estrella: true
    },
    {
      nombre: 'Emiliano Martinez',
      posicion: 'Arquero',
      equipo: 'Aston Villa',
      edad: 30,
      estrella: true
    },
    {
      nombre: 'Geronimo Rulli',
      posicion: 'Arquero',
      equipo: 'Villareal',
      edad: 30,
      estrella: false
    },
    {
      nombre: 'Nahuel Molina',
      posicion: 'Defensor',
      equipo: 'Atletico Madrid',
      edad: 24,
      estrella: false
    },
    {
      nombre: 'Nicolas Otamendi',
      posicion: 'Defensor',
      equipo: 'Benfica',
      edad: 34,
      estrella: false
    },
    {
      nombre: 'Leandro Paredes',
      posicion: 'MedioCampo',
      equipo: 'Juventus',
      edad: 28,
      estrella: false
    },
    {
      nombre: 'Angel Di Maria',
      posicion: 'Delantero',
      equipo: 'Juventus',
      edad: 34,
      estrella: true
    },
    {
      nombre: 'Rodrigo De Paul',
      posicion: 'MedioCampo',
      equipo: 'Atletico Madrid',
      edad: 28,
      estrella: false
    },
    {
      nombre: 'Lautaro Martinez',
      posicion: 'Delantero',
      equipo: 'Inter',
      edad: 25,
      estrella: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(jugador : Player):void {
    
  }

}

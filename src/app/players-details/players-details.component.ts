import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersInfoService } from '../players-details.service';
import { Player } from '../players/Player';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.scss']
})

export class PlayersDetailsComponent implements OnInit {

  jugadorObservable$: Observable<Player[]>;

  constructor(private playerDetails:PlayersInfoService) {
    this.jugadorObservable$ = playerDetails.jugador.asObservable();//Obtiene el jugador actual
  }

  ngOnInit(): void {
  }



}

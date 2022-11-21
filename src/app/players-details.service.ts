import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from './players/Player';

@Injectable({
  providedIn: 'root'
})

export class PlayersInfoService {

  private _jugadores: Player[] = [];
  jugador: BehaviorSubject<Player[]> = new BehaviorSubject(this._jugadores);

  constructor() { }

  showDetails(jugador:Player) {
      this._jugadores = [];
      this._jugadores.push({...jugador});

      this.jugador.next(this._jugadores);
  }
}

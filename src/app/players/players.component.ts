import { Component, OnInit } from '@angular/core';
import { InmemoryService } from '../inmemory.service';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private inmemoryService: InmemoryService) { }

  players: Player[]; // List of Players
  positions: string[]; //List of Positions
  positions = [];
  selectedPostion: string; // Current position selected

  ngOnInit() {
  	this.getPlayers();
  	this.grabPositions();
  }

  onSelect(position: string): void {
  	// Grab Current Position
    this.selectedPostion = position;
  }

  checkPosition(player: Player): boolean {
  	// Check Position of Current Player
  	if (player.position == this.selectedPostion || this.selectedPostion == null){
  		return true;
  	} else {
  		return false
  	}
  }

	getPlayers(): void {
		// Grab the player data asynrchonsouly so it does not impede load time of page
	  this.inmemoryService.getPlayers().subscribe(players => this.players = players);
	}

	grabPositions(): void {
		for (var i = this.players.length - 1; i >= 0; i--) {
			this.positions.push(this.players[i].position);
		}
    // Remove Duplicates from list positions
    this.positions = this.positions.filter((el, i, a) => i === a.indexOf(el))
	}

}

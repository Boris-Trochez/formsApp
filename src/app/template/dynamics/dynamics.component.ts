import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}


@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  person: Person = {
    name: 'Boris',
    favorites: [
      { id: 1, name: 'Resident Evil 2' },
      { id: 2, name: 'Halo 2' } 
    ]
  }

  newGame: string;

  constructor() { }

  ngOnInit(): void {
  }

  save( ) {
    
  }

  addGame() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }

    this.person.favorites.push({ ...newFavorite} );
    this.newGame = '';
  }

  delete( id: number ) {
    this.person.favorites.splice( id, 1 );
  }

}

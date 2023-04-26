import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  allPokemons: Array<any> = [];

  ngOnInit(): void {
    //this.getAllPokemonsApi();
  }

  getAllPokemonsApi = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then(response => response.json())
      .then(data =>
        data.results.forEach((element: any) => {
          fetch(element.url)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              this.allPokemons.push(data);
            })
        }))
    this.allPokemons.sort()
  }


}

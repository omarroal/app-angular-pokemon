import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Agregar HttpClientModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemonList: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPokemon();  // Llamada a la API al iniciar
  }

  fetchPokemon(): void {
    const pokemonCount = 50; // Número de Pokémon a obtener
    for (let i = 1; i <= pokemonCount; i++) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe((data: any) => {
        console.log(data);  // Imprime los datos del Pokémon en la consola

        // Guardar los datos del Pokémon en la lista pokemonList
        this.pokemonList.push({
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((t: any) => t.type.name), // Extraer tipos
          weight: data.weight / 10, // Conversión a kg
          height: data.height / 10, // Conversión a metros
          stats: data.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
        });
      });
    }
  }

  get filteredPokemon(): any[] {
    return this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

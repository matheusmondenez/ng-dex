import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  constructor(private http: HttpClient) {
    //
  }

  getAll() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  }

  getData(url: string) {
    console.log('PokemonService.getData', url)
    return this.http.get(url)
  }
}

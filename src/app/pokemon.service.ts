import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  baseURL: string

  constructor(private http: HttpClient) {
    this.baseURL = 'https://pokeapi.co/api/v2'
  }

  getAll() {
    return this.http.get(`${this.baseURL}/pokemon?limit=151`)
  }

  getById(id: string) {
    return this.http.get(`${this.baseURL}/pokemon/${id}`)
  }

  getData(url: string) {
    return this.http.get(url)
  }
}

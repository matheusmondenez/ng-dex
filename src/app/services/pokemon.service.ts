import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Pagination } from '../../types/Pagination'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseURL: string

  constructor(private http: HttpClient) {
    this.baseURL = 'https://pokeapi.co/api/v2'
  }

  get(url: string) {
    return this.http.get(url)
  }

  getAll(pagination: Pick<Pagination, 'offset' | 'limit'>) {
    return this.http.get(`${this.baseURL}/pokemon?offset=${pagination.offset}?limit=${pagination.limit}`)
  }

  getById(id: string) {
    return this.http.get(`${this.baseURL}/pokemon/${id}`)
  }
}

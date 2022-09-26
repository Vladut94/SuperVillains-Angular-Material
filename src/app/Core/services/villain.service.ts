import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Villain } from '../interfaces/villain.interface';


const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
}


@Injectable()

export class VillainService {
  private readonly baseUrl: string;

  constructor(private http : HttpClient) { 
    this.baseUrl = 'http://localhost:3000';
  }

  getVillains(): Observable<Villain[]> {
    const url = `${this.baseUrl}/villains`;
    
    return this.http.get<Villain[]>(url);
  }

  getVillain(id: number): Observable<Villain> {
    const url = `${this.baseUrl}/villains/${id}`;

    return this.http.get<Villain>(url);
  }

  addVillain(villain: Villain) {
    const url = `${this.baseUrl}/villains`;

    return this.http.post<Villain>(url, villain)
  }
}

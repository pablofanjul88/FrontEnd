import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'app/model/persona.model';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {
URL = 'https://backendmgb-uxo2.onrender.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ `traer/perfil`);
    
  }
}

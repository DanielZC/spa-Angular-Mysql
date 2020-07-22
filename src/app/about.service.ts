import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AboutService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  Listar(){
    return this.http.get(`${this.baseUrl}listarAbout.php`)
  }

  ListarTodo(){
    return this.http.get(`${this.baseUrl}listarTodoAbout.php`)
  }

  Guardar(email: object){
    return this.http.post(`${this.baseUrl}crearAbout.php`,email)
  }

  Eliminar(id: number){
    return this.http.delete(`${this.baseUrl}eliminarAbout.php?id=${id}`)
  }

  Responder(id:number,respuesta:string){
    return this.http.put(`${this.baseUrl}responderAbout.php`,{id,respuesta})
  }
}

import { Component, OnInit } from '@angular/core';

import { AboutService } from '../about.service';
import { SnackbarService } from '../snackbar.service';
import { About } from '../about';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios: About
  res: any

  constructor(private aboutService: AboutService, private _snackbarServ: SnackbarService) { }

  ngOnInit(): void {
    this.Listar()
  }

  Listar(){
    return this.aboutService.ListarTodo().subscribe((usuarios: About) => {
      this.usuarios = usuarios
    })
  }

  Eliminar(id:number,email:string){
    var resp = confirm(`¿Esta seguro que desea eliminar este mail enviado por: "${email}"`)
    if(resp == true){
      return this.aboutService.Eliminar(id).subscribe((Response) => {
        this.res = Response
          if(this.res == 'ok'){
            this.Listar()
            this._snackbarServ.OpenSnackbar("Email Eliminado")
          }
      })
    }
  }
}

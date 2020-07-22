import { Component, OnInit } from '@angular/core';

import { About } from '../about';
import { SnackbarService } from '../snackbar.service';
import { FooterComponent } from '../footer/footer.component';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  usuario: About
  usuarios = []
  res: any
  footer = new FooterComponent

  constructor(private aboutService: AboutService, private _snackbarServ: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.Listar()

    
  }

  Listar(){
    return this.aboutService.Listar().subscribe((emails: About[]) => {
      this.usuarios = emails
    })
  }

  guardar(nombre,email,asunto,mensaje,copia) {
    
    copia = copia == true ? 'si' : 'no'
    var user = {
      "nombre": nombre,
      "email": email,
      "asunto": asunto,
      "mensaje": mensaje,
      "copia": copia
    }
    
    return this.aboutService.Guardar(user).subscribe((Response: any) => {
      this.res = Response
      if(this.res == 'ok'){
        this.Listar()
        this._snackbarServ.OpenSnackbar("Email Enviado")
        // alert("Email Enviado")
      }
    })
  }

  Eliminar(id:number,email?:string) {
    
    var resp = confirm(`¿Esta seguro que desea eliminar este mail enviado por: "${email}"`)
    if(resp == true){
      return this.aboutService.Eliminar(id).subscribe((Response: any) => {
        this.res = Response
        if(this.res == 'ok'){
          this.Listar()
          this._snackbarServ.OpenSnackbar("Email Eliminado")
        }
      })
    }
  }

  Responder(id:number,respuesta:string) {
    return this.aboutService.Responder(id,respuesta).subscribe((Response: any) => {
      this.res = Response
      if(this.res == 'ok'){
        this.Listar()
        this._snackbarServ.OpenSnackbar("Respuesta Enviada")
      }
    })
  }

  validar(usuario: object) {
    
  }
}

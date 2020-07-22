import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  posicionHorizontal: MatSnackBarHorizontalPosition
  posicionVertical: MatSnackBarVerticalPosition

  constructor(private _snackbar: MatSnackBar) { }

  OpenSnackbar(mensaje: string){
    this._snackbar.open(mensaje,undefined,{
      duration: 10000,
      horizontalPosition: this.posicionHorizontal,
      verticalPosition: this.posicionVertical,
    })
  }
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialogdata } from '../models/dialogdata';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) {
  }

opendialog(data: Dialogdata){
// solo para pasar mensajes al usuario de control de acceso para reutlizar nuestro moadal
  this.matDialog.open(DialogComponent,{data})
}

}

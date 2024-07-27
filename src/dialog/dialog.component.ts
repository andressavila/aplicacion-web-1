import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { Dialogdata } from '../models/dialogdata';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {

constructor(@Inject(MAT_DIALOG_DATA)  public data:Dialogdata){}

}

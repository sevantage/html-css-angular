import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '09-Angular-FCP';

  constructor(public dialog: MatDialog) {}

  public onOpenDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      backdropClass: "my-backdrop",
      panelClass: "my-panel",
      data: {},
    });
  }
}

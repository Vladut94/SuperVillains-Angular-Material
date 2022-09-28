import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VillainFormComponent } from './villain-form/villain-form/villain-form.component';
import { VillainService } from 'src/app/Core/services/villain.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog : MatDialog, private villainService : VillainService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(VillainFormComponent, {
     width:'30%'
    }).afterClosed().subscribe(val => {
      if(val === 'Save'){
        this.villainService.getVillains();
      }
    });
  }
}

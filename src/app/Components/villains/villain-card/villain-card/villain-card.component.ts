import { Component, OnInit, Input } from '@angular/core';
import { Villain } from 'src/app/Core/interfaces/villain.interface';
import { VillainFormComponent } from '../../header/villain-form/villain-form/villain-form.component';
import { MatDialog} from '@angular/material/dialog';
import { VillainService } from 'src/app/Core/services/villain.service';
import { VillainStoreService } from 'src/app/store/villain-store.service';

@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.css']
})
export class VillainCardComponent implements OnInit {
  @Input()
  villain!: Villain;

  

  constructor(
    private dialog : MatDialog, 
    private villainService : VillainService,
    private villainStoreService : VillainStoreService) { }

  ngOnInit(): void {
  }

  editVillain() {
    this.dialog.open(VillainFormComponent, {
      width: '30%',
      data: this.villain
    }).afterClosed().subscribe(val => {
      if(val === 'Update'){
        this.villainService.getVillains();
      }
    })
  }

  deleteVillain() {
    this.villainService.deleteVillain(this.villain.id).subscribe(() =>
      (this.villainStoreService.deleteVillain(this.villain.id)));
  }
}

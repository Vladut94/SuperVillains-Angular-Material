import { Component, OnInit } from '@angular/core';
import { Villain } from 'src/app/Core/interfaces/villain.interface';
import { VillainService } from 'src/app/Core/services/villain.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  villains!: Villain[];

  constructor(
    private villainService: VillainService
  ) { }

  ngOnInit(): void {
    this.villainService.getVillains().subscribe((villains) =>
      (this.villains = villains));
  }

}

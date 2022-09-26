import { Component, OnInit, Input } from '@angular/core';
import { Villain } from 'src/app/Core/interfaces/villain.interface';

@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.css']
})
export class VillainCardComponent implements OnInit {
  @Input()
  villain!: Villain;

  constructor() { }

  ngOnInit(): void {
  }

}

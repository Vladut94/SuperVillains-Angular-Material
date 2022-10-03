import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Villain } from '../Core/interfaces/villain.interface';
import { VillainService } from '../Core/services/villain.service';

@Injectable({
  providedIn: 'root'
})
export class VillainStoreService {
  villains$ = new BehaviorSubject<Villain[]>([]);
  private updateVillain$ = new Subject<Villain>();
  private addVillain$ = new Subject<Villain>();
  private deleteVillain$ = new Subject<number>();

  constructor(private villainService: VillainService) {
    this.addVillain$.subscribe((newVillain: Villain) => 
    (this.villains$.next([...this.villains$.getValue(), newVillain])));

    this.deleteVillain$.subscribe((id: number) => 
    (this.villains$.next(this.villains$.getValue().filter((villain) => {
      return villain.id != id
    }))));

    this.updateVillain$.subscribe((updatedVillain) => {
      this.villains$.next(this.villains$.getValue().map((villain) => {
        return villain.id === updatedVillain.id ? updatedVillain : villain;
      }))
    })

    this.villainService.getVillains().subscribe((villains) => 
    (this.villains$.next(villains)));
   }

  addNewVillain(villain: Villain) {
    this.villainService.addVillain(villain).subscribe((newVillain) => {
      this.addVillain$.next(newVillain);
    });
  }

  deleteVillain(id: number) {
    this.deleteVillain$.next(id);
  }

  updateVillain(payload: Villain, id: number) {
    this.villainService.editVillain(payload, id).subscribe((updatedVillain) => {
      this.updateVillain$.next(updatedVillain)
    });
  }
}

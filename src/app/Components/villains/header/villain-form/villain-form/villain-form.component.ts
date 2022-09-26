import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VillainService } from 'src/app/Core/services/villain.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-villain-form',
  templateUrl: './villain-form.component.html',
  styleUrls: ['./villain-form.component.css']
})
export class VillainFormComponent implements OnInit {

  villainForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private villainService: VillainService, private dialogRef: MatDialogRef<VillainFormComponent>) { }

  ngOnInit(): void {
    this.villainForm = this.formBuilder.group({
      realName : ['', Validators.required],
      supervillainName : ['', Validators.required],
      imageUrl : ['', Validators.required]
    })
  }

  addVillain() {
    if(this.villainForm.valid) {
      this.villainService.addVillain(this.villainForm.value)
      .subscribe({
        next:(res)=> {
          alert("Villain added successfully");
          this.villainForm.reset();
          // this.villainForm.close();
        },
        error:()=> {
          alert("Error while adding the product")
        }
      })
    }
  }
}

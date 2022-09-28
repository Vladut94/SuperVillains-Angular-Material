import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VillainService } from 'src/app/Core/services/villain.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-villain-form',
  templateUrl: './villain-form.component.html',
  styleUrls: ['./villain-form.component.css']
})
export class VillainFormComponent implements OnInit {

  villainForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(
    private formBuilder: FormBuilder, 
    private villainService: VillainService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<VillainFormComponent>) { }

  ngOnInit(): void {
    this.villainForm = this.formBuilder.group({
      realName : ['', Validators.required],
      supervillainName : ['', Validators.required],
      imageUrl : ['', Validators.required]
    })

    if(this.editData) {
      this.actionBtn = "Update";
      this.villainForm.controls['realName'].patchValue(this.editData.realName);
      this.villainForm.controls['supervillainName'].patchValue(this.editData.supervillainName);
      this.villainForm.controls['imageUrl'].patchValue(this.editData.imageUrl);
    }
    
  }

  addVillain() {
   if(!this.editData){
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
   }else {
    this.updateVillain()
   }
  }

  updateVillain() {
    this.villainService.editVillain(this.villainForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Daca nu a aparut, apasa F5");
          this.villainForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the villain!!");
        }
      })
  }
}

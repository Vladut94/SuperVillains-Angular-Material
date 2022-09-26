import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-villain-form',
  templateUrl: './villain-form.component.html',
  styleUrls: ['./villain-form.component.css']
})
export class VillainFormComponent implements OnInit {

  villainForm !: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.villainForm = this.formBuilder.group({
      realName : ['', Validators.required],
      supervillainName : ['', Validators.required],
      imageUrl : ['', Validators.required]
    })
  }

  addVillain() {
    console.log(this.villainForm.value);
  }
}

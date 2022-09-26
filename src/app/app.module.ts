import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { VillainService } from './Core/services/villain.service';
import { SuperpowerService } from './Core/services/superpower.service';

import { VillainsComponent } from './Components/villains/villains.component';
import { HeaderComponent } from './Components/villains/header/header.component';
import { VillainCardComponent } from './Components/villains/villain-card/villain-card/villain-card.component';
import { VillainFormComponent } from './Components/villains/header/villain-form/villain-form/villain-form.component';


@NgModule({
  declarations: [
    AppComponent,
    VillainsComponent,
    HeaderComponent,
    VillainCardComponent,
    VillainFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VillainService, SuperpowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

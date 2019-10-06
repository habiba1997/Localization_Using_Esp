import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent} from './map.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: MapComponent
  }
];
@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }

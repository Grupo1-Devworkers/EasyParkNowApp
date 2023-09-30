import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingComponent} from "./public/pages/parking/parking.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {MapComponent} from "./public/pages/map/map.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'parking', component: ParkingComponent},
  {path:'map', component: MapComponent},
  {path:'**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

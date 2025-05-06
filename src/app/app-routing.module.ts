import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { HotchipsComponent } from './components/hotchips/hotchips.component';
import { SweetsComponent } from './components/sweets/sweets.component';
import { VadiyaluComponent } from './components/vadiyalu/vadiyalu.component';
import { AndhraspecialsComponent } from './components/andhraspecials/andhraspecials.component';
import { PoduluComponent } from './components/podulu/podulu.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { PickelsComponent } from './components/pickels/pickels.component';
import { AddnewitemsComponent } from './components/addnewitems/addnewitems.component';
import { ManageitemsComponent } from './components/manageitems/manageitems.component';
import { ViewbookingitemsComponent } from './components/viewbookingitems/viewbookingitems.component';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { ViewitemsComponent } from './components/viewitems/viewitems.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeComponent } from './components/home/home.component';
import { SampleComponent } from './components/sample/sample.component';

const routes: Routes = [
  {path:'',component:StartComponent},
  {path:'sample',component:SampleComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
        {path:'hot',component:HotchipsComponent},
        {path:'sweet',component:SweetsComponent},
        {path:'vadiyalu',component:VadiyaluComponent},
        {path:'andhra',component:AndhraspecialsComponent},
        {path:'podulu',component:PoduluComponent},
        {path:'pickels',component:PickelsComponent},
        {path:'view/:id',component:ViewitemsComponent},
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'add',component:AddnewitemsComponent},
      {path:'manage',component:ManageitemsComponent},
      {path:'viewbooking',component:ViewbookingitemsComponent},
    ]
  },
  {path:'profile',component:ProfileComponent,
    children:[
      {path:'mybooking',component:MybookingsComponent},
      {path:'wishlist',component:WishlistComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

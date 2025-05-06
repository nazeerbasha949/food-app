import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ViewitemsComponent } from './components/viewitems/viewitems.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { ViewbookingitemsComponent } from './components/viewbookingitems/viewbookingitems.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddnewitemsComponent } from './components/addnewitems/addnewitems.component';
import { ManageitemsComponent } from './components/manageitems/manageitems.component';
import { StartComponent } from './components/start/start.component';
import { HotchipsComponent } from './components/hotchips/hotchips.component';
import { SweetsComponent } from './components/sweets/sweets.component';
import { VadiyaluComponent } from './components/vadiyalu/vadiyalu.component';
import { AndhraspecialsComponent } from './components/andhraspecials/andhraspecials.component';
import { PoduluComponent } from './components/podulu/podulu.component';
import { PickelsComponent } from './components/pickels/pickels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { SampleComponent } from './components/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    ViewitemsComponent,
    MybookingsComponent,
    ViewbookingitemsComponent,
    WishlistComponent,
    AddnewitemsComponent,
    ManageitemsComponent,
    StartComponent,
    HotchipsComponent,
    SweetsComponent,
    VadiyaluComponent,
    AndhraspecialsComponent,
    PoduluComponent,
    PickelsComponent,
    ProfileComponent,
    HomeComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

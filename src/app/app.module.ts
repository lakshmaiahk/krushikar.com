import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ValidateService} from './services/validate.service';
import { AuthService } from './services/auth.service';
import {HttpModule} from '@angular/http';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BuynewproductComponent } from './components/products/buynewproduct/buynewproduct.component';
import { BuyusedproductComponent } from './components/products/buyusedproduct/buyusedproduct.component';
import { RentproductComponent } from './components/products/rentproduct/rentproduct.component';
import { OrderComponent } from './components/order/order.component';
import { SellproductComponent } from './components/products/sellproduct/sellproduct.component';
import { VideoComponent } from './components/video/video.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    BuynewproductComponent,
    BuyusedproductComponent,
    RentproductComponent,
    OrderComponent,
    SellproductComponent,
    VideoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
      {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
      {path: 'navbar', component: NavbarComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: 'contactus', component: ContactusComponent},
      {path: 'buynewproduct', component: BuynewproductComponent},
      {path: 'buyusedproduct', component: BuyusedproductComponent},
      {path: 'rentproduct', component: RentproductComponent},
      {path: 'order', component: OrderComponent},
      {path: 'sellproduct', component: SellproductComponent},
      {path: 'video', component: VideoComponent},
      {path: 'admin', component: AdminComponent}

  ])
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

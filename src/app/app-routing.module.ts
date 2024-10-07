import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ERPforApparelManufacturingComponent } from './pages/erpfor-apparel-manufacturing/erpfor-apparel-manufacturing.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'erpfor-apparel-manufacturing', component: ERPforApparelManufacturingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

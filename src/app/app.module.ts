import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CareerComponent } from './pages/career/career.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { IntelligentDataMigrationComponent } from './pages/intelligent-data-migration/intelligent-data-migration.component';
import { IsoxComponent } from './pages/isox/isox.component';
import { DmacComponent } from './pages/dmac/dmac.component';
import { IspxComponent } from './pages/ispx/ispx.component';
import { IdmxComponent } from './pages/idmx/idmx.component';
import { SpotComponent } from './pages/spot/spot.component';
import { TimesOfPeopleComponent } from './pages/times-of-people/times-of-people.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
    CareerComponent,
    AboutUsComponent,
   
   
    IntelligentDataMigrationComponent,
         IsoxComponent,
         DmacComponent,
         IspxComponent,
         IdmxComponent,
         SpotComponent,
         TimesOfPeopleComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatTabsModule,BrowserAnimationsModule,TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

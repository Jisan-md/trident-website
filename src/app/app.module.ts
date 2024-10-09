import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';


import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
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

   
    IntelligentDataMigrationComponent,
    IsoxComponent,
    DmacComponent,
    IspxComponent,
    IdmxComponent,
    SpotComponent,
    TimesOfPeopleComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],

  imports: [
    BrowserModule,
    AppRoutingModule, MatTabsModule, BrowserAnimationsModule, TabsModule.forRoot(), NgbAccordionModule, MatExpansionModule
    ReactiveFormsModule,
    AppRoutingModule,MatTabsModule,BrowserAnimationsModule,TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

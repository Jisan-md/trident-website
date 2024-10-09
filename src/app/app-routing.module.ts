import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { RailTerminalOperationsSystemSoftwareComponent } from './pages/rail-terminal-operations-system-software/rail-terminal-operations-system-software.component';
import { ErpSoftwareForEducationComponent } from './pages/erp-software-for-education/erp-software-for-education.component';
import { IdmxComponent } from './pages/idmx/idmx.component';
import { IntelligentDataMigrationComponent } from './pages/intelligent-data-migration/intelligent-data-migration.component';
import { IsoxComponent } from './pages/isox/isox.component';
import { IspxComponent } from './pages/ispx/ispx.component';
import { SpotComponent } from './pages/spot/spot.component';
import { TimesOfPeopleComponent } from './pages/times-of-people/times-of-people.component';
import { DmacComponent } from './pages/dmac/dmac.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'rail-terminal-operations-system-software', component: RailTerminalOperationsSystemSoftwareComponent },
  { path: 'erp-software-for-education', component: ErpSoftwareForEducationComponent },
  { path: 'idmx', component: IdmxComponent },
  { path: 'intelligent-data-migration', component: IntelligentDataMigrationComponent },
  { path: 'isox', component: IsoxComponent },
  { path: 'ispx', component: IspxComponent },
  { path: 'spot', component: SpotComponent },
  { path: 'times-of-people', component: TimesOfPeopleComponent },
  { path: 'dmac', component: DmacComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

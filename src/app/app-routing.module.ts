import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AutomotiveComponent } from './pages/automotive/automotive.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ErpForEcommerceComponent } from './pages/erp-for-ecommerce/erp-for-ecommerce.component';
import { ErpForFoodandBeverageComponent } from './pages/erp-for-foodand-beverage/erp-for-foodand-beverage.component';
import { ErpForRealEstateComponent } from './pages/erp-for-real-estate/erp-for-real-estate.component';
import { ErpForRealEstateCrmComponent } from './pages/erp-for-real-estate-crm/erp-for-real-estate-crm.component';
import { ErpForSteelMetalsComponent } from './pages/erp-for-steel-metals/erp-for-steel-metals.component';
import { ErpForWarehouseManagementComponent } from './pages/erp-for-warehouse-management/erp-for-warehouse-management.component';
import { ErpForforHiTechAndElectronicsManufacturingComponent } from './pages/erp-forfor-hi-tech-and-electronics-manufacturing/erp-forfor-hi-tech-and-electronics-manufacturing.component';
import { SoftwareForEducationComponent } from './pages/software-for-education/software-for-education.component';
import { ERPforApparelManufacturingComponent } from './pages/erpfor-apparel-manufacturing/erpfor-apparel-manufacturing.component';
import { ERPforCasualRestaurantsComponent } from './pages/erpfor-casual-restaurants/erpfor-casual-restaurants.component';
import { ERPforCloudKitchenTechnologySolutionComponent } from './pages/erpfor-cloud-kitchen-technology-solution/erpfor-cloud-kitchen-technology-solution.component';
import { ERPforDutyFreeStoresComponent } from './pages/erpfor-duty-free-stores/erpfor-duty-free-stores.component';
import { ERPforElectronicRetailComponent } from './pages/erpfor-electronic-retail/erpfor-electronic-retail.component';
import { ERPforFashionFootwearComponent } from './pages/erpfor-fashion-footwear/erpfor-fashion-footwear.component';
import { ERPforFineDiningFullServicesRestaurantComponent } from './pages/erpfor-fine-dining-full-services-restaurant/erpfor-fine-dining-full-services-restaurant.component';
import { ERPforGrocerySupermarketComponent } from './pages/erpfor-grocery-supermarket/erpfor-grocery-supermarket.component';
import { ERPforLSCentralImplementationPlansComponent } from './pages/erpfor-lscentral-implementation-plans/erpfor-lscentral-implementation-plans.component';
import { ERPforLuxuryJewelryItemsComponent } from './pages/erpfor-luxury-jewelry-items/erpfor-luxury-jewelry-items.component';
import { ERPforPharmacyComponent } from './pages/erpfor-pharmacy/erpfor-pharmacy.component';
import { ERPforicdPortOperationsComponent } from './pages/erpforicd-port-operations/erpforicd-port-operations.component';
import { FleetManagementSoftwareComponent } from './pages/fleet-management-software/fleet-management-software.component';
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
  { path: 'about-us', component: AboutUsComponent },
  { path: 'automotive', component: AutomotiveComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'erp-for-ecommerce', component: ErpForEcommerceComponent },
  { path: 'erp-for-foodand-beverage', component: ErpForFoodandBeverageComponent },
  { path: 'erp-for-real-estate', component: ErpForRealEstateComponent },
  { path: 'erp-for-real-estate-crm', component: ErpForRealEstateCrmComponent },
  { path: 'erp-for-steel-metals', component: ErpForSteelMetalsComponent },
  { path: 'erp-for-warehouse-management', component: ErpForWarehouseManagementComponent },
  { path: 'erp-forfor-hi-tech-and-electronics-manufacturing', component: ErpForforHiTechAndElectronicsManufacturingComponent },
  { path: 'software-for-education', component: SoftwareForEducationComponent },
  { path: 'erpfor-apparel-manufacturing', component: ERPforApparelManufacturingComponent },
  { path: 'erpfor-casual-restaurants', component: ERPforCasualRestaurantsComponent },
  { path: 'erpfor-cloud-kitchen-technology-solution', component: ERPforCloudKitchenTechnologySolutionComponent },
  { path: 'erpfor-duty-free-stores', component: ERPforDutyFreeStoresComponent },
  { path: 'erpfor-electronic-retail', component: ERPforElectronicRetailComponent },
  { path: 'erpfor-fashion-footwear', component: ERPforFashionFootwearComponent },
  { path: 'erpfor-fine-dining-full-services-restaurant', component: ERPforFineDiningFullServicesRestaurantComponent },
  { path: 'erpfor-grocery-supermarket', component: ERPforGrocerySupermarketComponent },
  { path: 'erpfor-lscentral-implementation-plans', component: ERPforLSCentralImplementationPlansComponent },
  { path: 'erpfor-luxury-jewelry-items', component: ERPforLuxuryJewelryItemsComponent },
  { path: 'erpfor-pharmacy', component: ERPforPharmacyComponent },
  { path: 'erpforicd-port-operations', component: ERPforicdPortOperationsComponent },
  { path: 'fleet-management-software', component: FleetManagementSoftwareComponent },
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

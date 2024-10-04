import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CareerComponent } from './pages/career/career.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ERPforFashionFootwearComponent } from './pages/erpfor-fashion-footwear/erpfor-fashion-footwear.component';
import { ERPforApparelManufacturingComponent } from './pages/erpfor-apparel-manufacturing/erpfor-apparel-manufacturing.component';
import { ERPforGrocerySupermarketComponent } from './pages/erpfor-grocery-supermarket/erpfor-grocery-supermarket.component';
import { ERPforDutyFreeStoresComponent } from './pages/erpfor-duty-free-stores/erpfor-duty-free-stores.component';
import { ERPforLuxuryJewelryItemsComponent } from './pages/erpfor-luxury-jewelry-items/erpfor-luxury-jewelry-items.component';
import { ERPforPharmacyComponent } from './pages/erpfor-pharmacy/erpfor-pharmacy.component';
import { ERPforElectronicRetailComponent } from './pages/erpfor-electronic-retail/erpfor-electronic-retail.component';
import { ERPforLSCentralImplementationPlansComponent } from './pages/erpfor-lscentral-implementation-plans/erpfor-lscentral-implementation-plans.component';
import { ERPforFineDiningFullServicesRestaurantComponent } from './pages/erpfor-fine-dining-full-services-restaurant/erpfor-fine-dining-full-services-restaurant.component';
import { ERPforCasualRestaurantsComponent } from './pages/erpfor-casual-restaurants/erpfor-casual-restaurants.component';
import { ERPforCloudKitchenTechnologySolutionComponent } from './pages/erpfor-cloud-kitchen-technology-solution/erpfor-cloud-kitchen-technology-solution.component';
import { ErpForEcommerceComponent } from './pages/erp-for-ecommerce/erp-for-ecommerce.component';
import { ERPforicdPortOperationsComponent } from './pages/erpforicd-port-operations/erpforicd-port-operations.component';
import { RailTerminalOperationsSystemSoftwareComponent } from './pages/rail-terminal-operations-system-software/rail-terminal-operations-system-software.component';
import { FleetManagementSoftwareComponent } from './pages/fleet-management-software/fleet-management-software.component';
import { ErpForWarehouseManagementComponent } from './pages/erp-for-warehouse-management/erp-for-warehouse-management.component';
import { AutomotiveComponent } from './pages/automotive/automotive.component';
import { ErpForforHiTechAndElectronicsManufacturingComponent } from './pages/erp-forfor-hi-tech-and-electronics-manufacturing/erp-forfor-hi-tech-and-electronics-manufacturing.component';
import { ErpForSteelMetalsComponent } from './pages/erp-for-steel-metals/erp-for-steel-metals.component';
import { ErpForFoodandBeverageComponent } from './pages/erp-for-foodand-beverage/erp-for-foodand-beverage.component';
import { ErpForRealEstateComponent } from './pages/erp-for-real-estate/erp-for-real-estate.component';
import { ErpForRealEstateCrmComponent } from './pages/erp-for-real-estate-crm/erp-for-real-estate-crm.component';
import { ErpSoftwareForEducationComponent } from './pages/erp-software-for-education/erp-software-for-education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    CareerComponent,
    AboutUsComponent,
    ERPforFashionFootwearComponent,
    ERPforApparelManufacturingComponent,
    ERPforGrocerySupermarketComponent,
    ERPforDutyFreeStoresComponent,
    ERPforLuxuryJewelryItemsComponent,
    ERPforPharmacyComponent,
    ERPforElectronicRetailComponent,
    ERPforLSCentralImplementationPlansComponent,
    ERPforFineDiningFullServicesRestaurantComponent,
    ERPforCasualRestaurantsComponent,
    ERPforCloudKitchenTechnologySolutionComponent,
    ErpForEcommerceComponent,
    ERPforicdPortOperationsComponent,
    RailTerminalOperationsSystemSoftwareComponent,
    FleetManagementSoftwareComponent,
    ErpForWarehouseManagementComponent,
    AutomotiveComponent,
    ErpForforHiTechAndElectronicsManufacturingComponent,
    ErpForSteelMetalsComponent,
    ErpForFoodandBeverageComponent,
    ErpForRealEstateComponent,
    ErpForRealEstateCrmComponent,
    ErpSoftwareForEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

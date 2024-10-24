import { Component } from '@angular/core';

@Component({
  selector: 'app-erp-services',
  templateUrl: './erp-services.component.html',
  styleUrl: './erp-services.component.scss'
})
export class ErpServicesComponent {
  activeTab: number = 1;  
 
  showContent(tabNumber: number) {
   this.activeTab = tabNumber;
 }
}

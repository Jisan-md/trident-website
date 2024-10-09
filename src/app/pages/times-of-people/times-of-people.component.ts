import { Component } from '@angular/core';

@Component({
  selector: 'app-times-of-people',
  templateUrl: './times-of-people.component.html',
  styleUrl: './times-of-people.component.scss'
})
export class TimesOfPeopleComponent {
  activeTab: number = 1;  
  showContent(tabNumber: number) {
   this.activeTab = tabNumber;
 }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  activeTab: number = 1;  
  showContent(tabNumber: number) {
   this.activeTab = tabNumber;
 }


 isFirstOpen: any;
  oneAtATime = true;

  sections: { [key in 'mission' | 'vision' | 'values' | 'leadership'  ]: boolean } = {
    mission: true,
    vision: false,
    values: false,
    leadership: false,
  };

  toggleSection(section: 'mission' | 'vision' | 'values' | 'leadership' ) {
    const isCurrentlyOpen = this.sections[section]; 
    console.log('Clicked Section:', section, 'Currently Open:', isCurrentlyOpen);

    Object.keys(this.sections).forEach(key => {
      this.sections[key as keyof typeof this.sections] = false;
    });

    if (!isCurrentlyOpen) {
      this.sections[section] = true; 
    }
  }
}
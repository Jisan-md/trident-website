import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-dmac',
  templateUrl: './dmac.component.html',
  styleUrl: './dmac.component.scss'
})
export class DmacComponent implements OnInit{
  ngOnInit(): void {}

  isFirstOpen: any;
  oneAtATime = true;
    
      sections: { [key in 'dataCreation' | 'dataUpdate' | 'massDataManagement' | 'workflowApproval' | 'aiMlValidation' | 'dmac' | 'User']: boolean } = {
      dataCreation: false,
      dataUpdate: false,
      massDataManagement: false,
      workflowApproval: false,
      aiMlValidation: false,
      dmac: false,
      User: false
    };
    toggleSection(section: 'dataCreation' | 'dataUpdate' | 'massDataManagement' | 'workflowApproval' | 'aiMlValidation'|'dmac' | 'User') {
      const isCurrentlyOpen = this.sections[section]; 
      console.log('Clicked Section:', section, 'Currently Open:', isCurrentlyOpen);
  
      // Close all sections
      Object.keys(this.sections).forEach(key => {
          this.sections[key as keyof typeof this.sections] = false;
      });
  
      // If the clicked section was not open, open it
      if (!isCurrentlyOpen) {
          this.sections[section] = true; // Open the clicked section
      }}
}

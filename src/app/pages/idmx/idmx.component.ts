import { Component } from '@angular/core';

@Component({
  selector: 'app-idmx',
  templateUrl: './idmx.component.html',
  styleUrl: './idmx.component.scss'
})
export class IdmxComponent {
isFirstOpen: any;
oneAtATime = true;
  
    sections: { [key in 'dataCreation' | 'dataUpdate' | 'massDataManagement' | 'workflowApproval' | 'aiMlValidation']: boolean } = {
    dataCreation: false,
    dataUpdate: false,
    massDataManagement: false,
    workflowApproval: false,
    aiMlValidation: false
  };
  toggleSection(section: 'dataCreation' | 'dataUpdate' | 'massDataManagement' | 'workflowApproval' | 'aiMlValidation') {
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
